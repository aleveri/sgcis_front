import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfiguracion } from '../app.configuration';

@Injectable({
  providedIn: 'root'
})
export class PersonTypeService {

  constructor(private http: HttpClient,
    private appConfiguracion: AppConfiguracion) { }

  list() {
    return this.http.get(`${AppConfiguracion.API_URL}/api/PersonType`, {});
  }
}
