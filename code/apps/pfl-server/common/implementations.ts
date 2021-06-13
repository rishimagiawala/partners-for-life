import { Accounting } from "./banking";


export abstract class AccountingImplementationByRishi implements Accounting
{
    abstract credit(amount: number): number;
    
    abstract debit(amount: number): number;

    balance: number = 0;

    getBalance(): number {
        return this.balance;
    }
    
}


export class AccountingBySaurin extends AccountingImplementationByRishi
{
 
    credit(amount: number): number {
        throw new Error("Method not implemented.");
    }
 
    debit(amount: number): number {
        throw new Error("Method not implemented.");
    }
    
}