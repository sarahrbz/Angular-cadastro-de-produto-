import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = "http://localhost:3000/products"; //endereço da chamada HTTP

  constructor(private http: HttpClient) { } //por meio do constructor injetamos o HTTPCLIENT

  getAllProducts(): Observable<Product[]>{  //serviço getAllProducts -> devolve o array de produtos
    return this.http.get<Product[]>(this.apiUrl); //chamo o http, que vai lá no db.json, pega o conteudo  e  o devolve em um array
  }

  save(product: Product): Observable<Product>{ //quando salvo, devolvo apenas UM produto
    return this.http.post<Product>(this.apiUrl, product);
  }

}
