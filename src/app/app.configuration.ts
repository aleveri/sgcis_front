import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppConfiguracion {

    static API_URL = 'https://localhost:32774';

    constructor() { }

    getHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
        headers = headers.set('Access-Control-Allow-Methods', '*');
        headers = headers.set('Allow', '*');
        return headers;
    }
}