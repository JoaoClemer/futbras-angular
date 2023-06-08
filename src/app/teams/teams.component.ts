import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Teams } from 'models/teamsModels';
import { Matches } from 'models/matchesModel';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor(private api:ApiService){}

infoTeamName!:string;
team!:Teams[];
lastMatches!:Matches[];
nextMatches!:Matches[];

infoTeam(id:number,name:string){
  console.log('clicou')

  this.infoTeamName = name;

  this.api.getLastRoundsById(id)
  .subscribe((data:Matches)=>{
    this.lastMatches= data.response;
  },
  error => console.log(error));

  this.api.getNextRoundsById(id)
  .subscribe((data:Matches)=>{
    this.nextMatches = data.response;
  }, error => console.log(error));

}

closeModal(){

}

convertDate(date:string){
    const day = new Date(date).toLocaleString("pt-BR",{timeZone:'America/Sao_Paulo'});

    return day;
  }

ngOnInit(): void {

  this.api.getTeams()
  .subscribe((data:Teams)=>{
    this.team = data.response;
    console.log(this.team);
  },
  error=>console.log(error));

}
}
