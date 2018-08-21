import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../githubservice';

@Injectable({ 
  providedIn: 'root',
})
export class GithubServiceService {
  githubService : GithubService;

  constructor(private http:HttpClient) {
    this.githubService = new GithubService ("","","",""); 
  }

    userReturn() {
      interface ApiResponse{
        avatar_url: string,
        login: string,
        url: string,
        name: string,
  
      }
      const promise = new Promise((resolve)=>
      {this.http.get<ApiResponse>("https://api.github.com/users/ras-kwesi?access_token=").toPromise().then(response=>{
        this.githubService.avatar_url = response.avatar_url;
        this.githubService.login =response.login;
        this.githubService.url =response.url;
        this.githubService.name = response.url;
        console.log(response);
        resolve();
      });
    });
      return promise
    }
  }
