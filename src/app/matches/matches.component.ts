import { Matches } from './../../../models/matchesModel';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(private api:ApiService){}

  matches!:Matches[];

  ngOnInit():void{

    this.api.getNextRounds()
    .subscribe((data:Matches)=>{
      this.matches = data.response;
      console.log(this.matches);
    },
    error=>console.log(error));

  }



}
