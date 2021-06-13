import { IUser } from "../businesscontract/businessinterfaces";

export class UserImpl implements IUser
{
    firstName!: string;
    lastName!: string;
    emailAddress!: string;

    constructor(fname:string, lname:string,email:string)
    {
        this.firstName = fname;
        this.lastName = lname;
        this.emailAddress = email;
    }

    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }
    getEmailAddress(): string {
        return this.emailAddress;
    }

}