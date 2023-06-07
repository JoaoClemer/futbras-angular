import { Component, Input, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


constructor(private http: HttpClient){



}





  ngOnInit(): void {


  }



}
