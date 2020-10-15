import { Injectable } from '@angular/core';
import { constructor } from 'events';

@Injectable({
    providedIn: 'root'
})

export class ConfigurationParameters {

    constructor() {

    }

    getApiUrl() {
        return 'http://localhost:8080/';
    }
}
