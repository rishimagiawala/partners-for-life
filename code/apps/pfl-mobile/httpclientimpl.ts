import { IPFLHttpClient } from "../../common/services";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'


export class HttpClientIMPL
{

    get<T>(url: string, authHeader?: string): AxiosPromise<T>
    {
        let config = {
            headers: [{
                "Content-Type": "applicaiton/json"
            }]
        }

        let rvalue = axios.get<T,AxiosResponse<T>>(url,config);
        return rvalue;
    }


    post<T>(url: string, body: any, authHeader?: string): AxiosPromise<T> {
        
        let config = {
            headers: [{
                "Content-Type": "applicaiton/json"
            }]
        }

        let rvalue = axios.post<T,AxiosResponse<T>>(url,body,config);
        return rvalue;
        
    }
   
}



export class StorageClass
{
    storedObj: any;

    store (objToStore: any)
    {
        this.storedObj = objToStore;
    }
    
    retrive (): any
    {
        return this.storedObj;
    }
}


export class StorageClassGeneric<T>
{
    storedObj!: T;

    store (objToStore: T)
    {
        this.storedObj = objToStore;
    }
    
    retrive (): T
    {
        return this.storedObj;
    }
}


export function tbd ()
{
    let v = new Array<string>();
    v.push("Rishi");
    
    let  s = new StorageClass ();
    s.store(v);

    let object = s.retrive();
    

}


export function tbdGeneric ()
{
    let v = new Array<string>();
    v.push("Rishi");
    
    let  s = new StorageClassGeneric ();
    s.store(v);

    s.store("adfafa");

    let object = s.retrive();
    

}