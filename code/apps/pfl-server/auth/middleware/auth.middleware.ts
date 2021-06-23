import express from "express";
import usersService from "../../users/services/users.service";
import * as argon2 from "argon2";
import jwt from 'jsonwebtoken'

class AuthMiddleware {
  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByEmailWithPassword(
      req.body.email
    );
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, req.body.password)) {
        req.body = {
          userId: user._id,
          email: user.email,
          permissionFlags: user.permissionFlags,
        };
        return next();
      }
    }
    // Giving the same message in both cases
    // helps protect against cracking attempts:
    res.status(400).send({ errors: ["Invalid email and/or password"] });
  }

  async authenticateToken(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
const authHeader = req.headers['authorization']
const token = authHeader && authHeader?.split(' ')[1]


if (token == null) return res.sendStatus(401)

jwt.verify(token , process.env.ACCESS_TOKEN_SECRET as string, (err, user)=>{
    if(err) return res.sendStatus(403)

    req.body = user
    next()
})

  }
}
export default new AuthMiddleware();
