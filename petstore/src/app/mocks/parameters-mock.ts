import { Observable } from 'rxjs';
import { Parameters } from './../interfaces/parameters';

export class ParametersServiceMock {
    parameters: Parameters = {
        company_name: "Petstore LTDA",
        trademark: "Petstore",
        email: "contato@petstore-sp.com.br",
        address: "Avenida das Nações Unidas, 18801",
        address_complement: "Novámerica Office - Conj. 1010",
        city: "São Paulo",
        state: "SP",
        zip_code: "04795-100",
        social_networks: [
            {
            account: "imobzi",
            name: "Facebook"
            },
            {
            account: "imobzi",
            name: "Facebook"
            },
            {
            account: "imobzi",
            name: "Facebook"
            },
            {
            account: "imobzi",
            name: "Facebook"
            },
        ],
        phones: [
            {
            type: "Principal",
            number: "(11) 4063-4100",
            country_code: "+55"
            },
            {
            type: "Principal",
            number: "(11) 4063-4100",
            country_code: "+55"
            }
        ]
    }

    getParameters(): Observable<Parameters> {
        return new Observable<Parameters>(observer => {
          observer.next(this.parameters);
          observer.complete();
        });
    }
}