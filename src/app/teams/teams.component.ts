import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../api.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor(private api:ApiService){}

infoTeamName!:string;
team$!:Observable<any>;
lastMatches$!:Observable<any>;
nextMatches$!:Observable<any>;

infoTeam(id:number,name:string){
  console.log('clicou')

  this.infoTeamName = name;

  this.lastMatches$ = this.api.getLastRoundsById(id);

  this.nextMatches$ = this.api.getNextRoundsById(id);


}

closeModal(){

}

convertDate(date:string){
    const day = new Date(date).toLocaleString("pt-BR",{timeZone:'America/Sao_Paulo'});

    return day;
  }

ngOnInit(): void {

  this.team$ = this.api.getTeams();


}
}
