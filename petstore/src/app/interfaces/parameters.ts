export interface Parameters {
    company_name: string;
    trademark: string;
    email: string;
    address: string;
    address_complement: string;
    city: string;
    state: string;
    zip_code: string;
    social_networks: Array<social_networks>;
    phones: Array<phones>;
}

export interface social_networks {
    account: string;
    name: string;
}

export interface phones {
    number: string;
    type: string;
    country_code: string;
}