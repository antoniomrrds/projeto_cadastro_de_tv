import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from '../../model/productsTv'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';


//informando como sera o tipo de formato dedos 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = " http://localhost:3000/tvs"




  constructor(private snackBar: MatSnackBar, private http: HttpClient) {




  }
  showMessage(msg: string,isError: boolean=false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top', 
      panelClass:isError?['msg-error']:['msg-success']
    })
  }
  create(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.baseUrl, productType,httpOptions)

  }

  read(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.baseUrl)
  }

  readByid(id: string): Observable<ProductType> {

    const url = `${this.baseUrl}/${id}`
    return this.http.get<ProductType>(url)
  }

  update(product: ProductType): Observable<ProductType> {

    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<ProductType>(url, product)
  }

  delete(id: string): Observable<ProductType> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<ProductType>(url)
  }
}
