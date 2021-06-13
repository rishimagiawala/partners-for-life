import * as http from 'http';

import { RegisterUserRequest, RegisterUserResponse } from "../commobjs";
import { PFLService } from "../services";

export class PFLServiceIMPL implements PFLService
{
    constructor(private httpClient: http,private serverUrl: string)
    {
    }


    registerUser(request: RegisterUserRequest): RegisterUserResponse {
        
    }

    
}