import { RegisterUserRequest, RegisterUserResponse } from "./commobjs";

export interface PFLService
{
    registerUser (request: RegisterUserRequest): Promise<RegisterUserResponse>;

}



export interface IPFLHttpClient
{
    get<T>(url: string,authHeader?: string) : Promise<T>;
    post<T>(url: string,body: any,authHeader?:string): Promise<T>;
}