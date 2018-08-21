import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GithubService } from '../githubservice';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [GithubService]
})
export class LandingPageComponent implements OnInit {
  githubService: any;

  constructor(private http:HttpClient, public _serviceme: GithubService) { }
  
  ngOnInit() {
    this._serviceme.userReturn();
    this.githubService = this._serviceme.githubService;
      }
    }
  


