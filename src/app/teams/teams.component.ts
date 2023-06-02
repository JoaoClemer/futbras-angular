import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Teams } from 'models/teamsModels';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor(private api:ApiService){}

team!:Teams[];


ngOnInit(): void {

  this.api.getTeams()
  .subscribe((data:Teams)=>{
    this.team = data.response;
    console.log(this.team);
  },
  error=>console.log(error));

}
}
