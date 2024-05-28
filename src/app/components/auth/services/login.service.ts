import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Aquí debes reemplazar la URL con la de tu API de autenticación
    const url = 'http://localhost:9090/server/oauth2/authorize';

    return this.http.post(url, { username, password });
  }
}
