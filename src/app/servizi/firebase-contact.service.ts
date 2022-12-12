import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseContactService {

  constructor(private http: HttpClient) { }

insertMessage(url: string, body: {}){

  return this.http.post(url, body)
}






}
