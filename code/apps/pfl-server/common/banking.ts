export interface Accounting
{

    getBalance (): number;

    /**
     * This method will take the amount an add ito the existing balance.. and return the current balance after addition.
     * @param amount - Amount is the number that you want to credit..
     */
    credit (amount: number): number;


    debit (amount: number): number;

}


export class MyImplementation implements Accounting
{
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
    credit(amount: number): number {
        throw new Error("Method not implemented.");
    }
    debit(amount: number): number {
        throw new Error("Method not implemented.");
    }
    
}

export class Bank
{

    createAccount (account: Accounting)
    {
        
    }

}