export class PFLBusiness
{
    private businessName!: string;
    private registrationId!: string;
    private taxId!: string;
    private headQuarter!: PFLAddress;
    private locations!: Array<PFLBusinessLocation>;


    /**
     * Getter $businessName
     * @return {string}
     */
	public get $businessName(): string {
		return this.businessName;
	}

    /**
     * Getter $registrationId
     * @return {string}
     */
	public get $registrationId(): string {
		return this.registrationId;
	}

    /**
     * Getter $taxId
     * @return {string}
     */
	public get $taxId(): string {
		return this.taxId;
	}

    /**
     * Getter $headQuarter
     * @return {PFLAddress}
     */
	public get $headQuarter(): PFLAddress {
		return this.headQuarter;
	}

    /**
     * Getter $locations
     * @return {Array<PFLBusinessLocation>}
     */
	public get $locations(): Array<PFLBusinessLocation> {
		return this.locations;
	}

    /**
     * Setter $businessName
     * @param {string} value
     */
	public set $businessName(value: string) {
		this.businessName = value;
	}

    /**
     * Setter $registrationId
     * @param {string} value
     */
	public set $registrationId(value: string) {
		this.registrationId = value;
	}

    /**
     * Setter $taxId
     * @param {string} value
     */
	public set $taxId(value: string) {
		this.taxId = value;
	}

    /**
     * Setter $headQuarter
     * @param {PFLAddress} value
     */
	public set $headQuarter(value: PFLAddress) {
		this.headQuarter = value;
	}

    /**
     * Setter $locations
     * @param {Array<PFLBusinessLocation>} value
     */
	public set $locations(value: Array<PFLBusinessLocation>) {
		this.locations = value;
	}

}



export class PFLBusinessLocation
{
    private locationName!: string;
    private locationAddr!: PFLAddress;


    /**
     * Getter $locationName
     * @return {string}
     */
	public get $locationName(): string {
		return this.locationName;
	}

    /**
     * Getter $locationAddr
     * @return {PFLAddress}
     */
	public get $locationAddr(): PFLAddress {
		return this.locationAddr;
	}

    /**
     * Setter $locationName
     * @param {string} value
     */
	public set $locationName(value: string) {
		this.locationName = value;
	}

    /**
     * Setter $locationAddr
     * @param {PFLAddress} value
     */
	public set $locationAddr(value: PFLAddress) {
		this.locationAddr = value;
	}
    
}

export class PFLAddress {
    private street!: string;
    private block!: string;
    private city!: string;
    private state!: string;
    private zip!: string;
    private country!: string;
 

    /**
     * Getter $street
     * @return {string}
     */
	public get $street(): string {
		return this.street;
	}

    /**
     * Getter $block
     * @return {string}
     */
	public get $block(): string {
		return this.block;
	}

    /**
     * Getter $city
     * @return {string}
     */
	public get $city(): string {
		return this.city;
	}

    /**
     * Getter $state
     * @return {string}
     */
	public get $state(): string {
		return this.state;
	}

    /**
     * Getter $zip
     * @return {string}
     */
	public get $zip(): string {
		return this.zip;
	}

    /**
     * Getter $country
     * @return {string}
     */
	public get $country(): string {
		return this.country;
	}

    /**
     * Setter $street
     * @param {string} value
     */
	public set $street(value: string) {
		this.street = value;
	}

    /**
     * Setter $block
     * @param {string} value
     */
	public set $block(value: string) {
		this.block = value;
	}

    /**
     * Setter $city
     * @param {string} value
     */
	public set $city(value: string) {
		this.city = value;
	}

    /**
     * Setter $state
     * @param {string} value
     */
	public set $state(value: string) {
		this.state = value;
	}

    /**
     * Setter $zip
     * @param {string} value
     */
	public set $zip(value: string) {
		this.zip = value;
	}

    /**
     * Setter $country
     * @param {string} value
     */
	public set $country(value: string) {
		this.country = value;
	}
    
}


export class PFLUser {
    private firstName!: string;
    private lastName!:  string;
    private emailAddress!: string;
    private IDP!: string;

    constructor (fn: string,ln: string,em: string,idp: string)
    {
        this.IDP = idp;
        this.$emailAddress = em;
        this.$firstName = fn;
        this.lastName = ln;
    }

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return { string}
     */
	public get $lastName():  string {
		return this.lastName;
	}

    /**
     * Getter $emailAddress
     * @return {string}
     */
	public get $emailAddress(): string {
		return this.emailAddress;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param { string} value
     */
	public set $lastName(value:  string) {
		this.lastName = value;
	}

    /**
     * Setter $emailAddress
     * @param {string} value
     */
	public set $emailAddress(value: string) {
		this.emailAddress = value;
	}
  
}




