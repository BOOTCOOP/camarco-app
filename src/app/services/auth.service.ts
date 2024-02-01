import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IndicatorDataService  } from './indicator-data.service';
import { throwError } from 'rxjs';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url: String;
  webToken: String;
  storage = new Storage

  constructor(public http: HttpClient, indicatorsData: IndicatorDataService) { 
    this.url = indicatorsData.getServerUrl();
    this.webToken = indicatorsData.getWebToken();
    this.storage.create();
  }

  isLoggedIn():any{
    return this.storage.get('userAuth').then((userAuth:any) => {
      if (userAuth && userAuth.expiration) {
        let expirationDate = new Date(userAuth.expiration);
        return expirationDate.getTime() > new Date().getTime();
      } else {
        return false;
      }
    });
  }

  async login(username:string, password:string) {
 
    let credentials = {
        username: username,
        password: password
    };

    
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Token ${this.webToken}`
    }); 
    

    return this.http.post(this.url + 'camarco/login', JSON.stringify(credentials), {headers: headers})
      .subscribe((data:any) => {
        let userJson = data;
        if(userJson.status_code === 200) {
          this.storage.set('userAuth', userJson);
          return {success: true, message: userJson.message};
        } else {
          return {
            success: false,
            message: userJson.message || 'Hubo un error en el servicio, por favor intente más tarde'
          }
        }
      });

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
