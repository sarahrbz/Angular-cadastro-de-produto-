import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = "http://localhost:3000/products"; //endereço da chamada HTTP

  //protocolo HTTP
  constructor(private http: HttpClient) { } //por meio do constructor injetamos o HTTPCLIENT

  getAllProducts(): Observable<Product[]>{  //serviço getAllProducts -> devolve o array de produtos
    return this.http.get<Product[]>(this.apiUrl); //chamo o http, que vai lá no db.json, pega o conteudo  e  o devolve em um array
  }

  save(product: Product): Observable<Product>{ //quando salvo, devolvo apenas UM produto
    return this.http.post<Product>(this.apiUrl, product);
  }

   // HTTP DELETE: http://localhost:3000/products/6
  delete(product: Product): Observable<void>{ // DELETE do HTTP
    return this.http.delete<void>(`${this.apiUrl}/${product.id}`);
  }

  // HTTP PUT: http://localhost:3000/products/3
  // HTTP Request Body: Product
  update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product); //PUT -> manda todo o objeto (tudo oq foi e até oq não foi alterado) e PAT atualiza só oq foi alterado
}

}
