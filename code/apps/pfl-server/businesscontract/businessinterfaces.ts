export interface IUser
{
    /**
     * This should return the name of the user..
     */
    getFirstName (): string;

    /**
     * This should return the last name of the user
     */
    getLastName (): string;


    getEmailAddress (): string;
}


export interface IAddress
{
    getStreet (): string;
    getZipcode (): string;
    getCity (): string;
    getState (): string;
    getCountry (): string;
}

export interface IBusiness
{
    getName (): string;

    getAddress (): IAddress;

    getOwner (): IUser;
}



export interface PFLSystem
{
    registerUser (user: IUser): void;

    registerBusinessForUser (user: IUser,business: IBusiness): void

}



