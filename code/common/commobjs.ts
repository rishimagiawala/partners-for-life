import { PFLUser } from "./dto";

export class RequestStatus
{
    errorCode!: string;
    errorMessages!: Array<string>;
    successCode!: string;
    successMessages!: Array<string>;
}

export class SortOrder
{
    ascDesc!: boolean;   // If True means ascending order, if false means descring
    field!: string;  // The name of the field on which you want to apply this sort order
}

export class PagingInformation
{
    pageNumber!: number;
    noOfRecords!: number;
    totalRecords!: number;
}


export abstract class BaseRequest
{
    pagingInfo!: PagingInformation;
    sortOrders!: Array<SortOrder>;

}

export abstract class BaseResponse
{
    requestStatus!: RequestStatus;
    pagingInfo!: PagingInformation;
}


export class RegisterUserRequest extends BaseRequest
{
    userInfo!: PFLUser;
}

export class RegisterUserResponse extends BaseResponse
{
    userInfo!: PFLUser; 
}