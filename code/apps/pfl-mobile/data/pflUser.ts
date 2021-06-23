import { CreateUserDto } from '../../pfl-server/users/dto/create.user.dto';
export class PFLUser implements CreateUserDto{
    constructor(firstName: string, email:string, password: string){
        this.firstName = firstName
        this.email = email
        this.password = password
       

    }
    
    email: string;
    password: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    permissionLevel?: number | undefined;

}