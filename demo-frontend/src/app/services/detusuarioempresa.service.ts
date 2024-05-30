import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as url from "url";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DetusuarioempresaService {

  private apiUrl = 'https://localhost:7267/api/DetUsuarioEmpresa';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getById(codEmpresa: number, codUsuario: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${codEmpresa}/${codUsuario}`);
  }

  create(detUsuarioEmpresa: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, detUsuarioEmpresa);
  }

  update(detUsuarioEmpresa: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${detUsuarioEmpresa.codEmpresa}/${detUsuarioEmpresa.codUsuario}`, detUsuarioEmpresa);
  }

  delete(codEmpresa: number, codUsuario: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${codEmpresa}/${codUsuario}`);
  }
}