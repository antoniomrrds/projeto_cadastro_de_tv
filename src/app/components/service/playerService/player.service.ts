import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Players } from '../../model/players'
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
export class PlayerServiceService {

  baseUrl = "http://localhost:3000/players"




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
  createPlayer(players: Players): Observable<Players> {
    return this.http.post<Players>(this.baseUrl,players,httpOptions)

  }

  readPlayer(): Observable<Players[]> {
    return this.http.get<Players[]>(this.baseUrl)
  }

  readPlayerByid(id: string): Observable<Players> {

    const url = `${this.baseUrl}/${id}`
    return this.http.get<Players>(url)
  }

  updatePlayer(product: Players): Observable<Players> {

    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Players>(url, product)
  }

  deletePlayer(id: string): Observable<Players> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Players>(url)
  }
}
