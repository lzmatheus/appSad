import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { privateEncrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url: string = 'https://rickandmortyapi.com/api/episode/32';
  constructor (private httpClient: HttpClient) { }
  listar(){
    return this.httpClient.get(`${this.url}`)
  }

}
