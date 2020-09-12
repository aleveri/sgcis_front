import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfiguracion } from '../app.configuration';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient,
    private appConfiguracion: AppConfiguracion) { }

  list() {
    return this.http.get(`${AppConfiguracion.API_URL}/api/Person`, {});
  }

  add(person: Person) {
    return this.http.post(`${AppConfiguracion.API_URL}/api/Person`, person, {
      headers: this.appConfiguracion.getHeader()
    });
  }

  delete(id: string) {
    return this.http.delete(`${AppConfiguracion.API_URL}/api/Person`, {
      params: new HttpParams().append('id', id)
    });
  }
}
