import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user = new User ("","","")

  //constructor(private http:HttpClient) {
  //  user = new User ("","","")

    //content() {this.http.get<ApiResponse>("https://api.github.com/users/ras-kwesi?access_token=").subscribe(data=>{
      //this.user= new User(data.name, data.page, data.userName)
      //console.log()
  
}
