import express from 'express';
import debug from 'debug';
import jwt from 'jsonwebtoken'

const log: debug.IDebugger = debug('app:auth-controller');



class AuthController {
    async createJWT(req: express.Request, res: express.Response) {
    const accessToken = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET as string)
    res.send(accessToken)

    }
}

export default new AuthController();