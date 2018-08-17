import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    interface ApiResponse{
      avatar_url: string,
      login: string,
      url: string,
      name: string,
      //followers_url: string,
      //following_url: string, 
    }

    
    
    }
  }
  


