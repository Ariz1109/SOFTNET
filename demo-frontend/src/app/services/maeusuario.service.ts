import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as url from "url";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MaeusaurioService {

  private apiUrl = 'https://localhost:7267/api/MaeUsuario';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  create(maeUsuario: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, maeUsuario);
  }

  update(id: number, maeUsuario: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, maeUsuario);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}

