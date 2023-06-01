import { Matches } from './../../../models/matchesModel';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
  encapsulation: ViewEncapsulation.None
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

  convertDate(date:string){
    const day = new Date((typeof date === "string" ? new Date(date):date).toLocaleString("pt-BR",{timeZone:'America/Sao_Paulo'}));

    return day.toLocaleString("pt-BR");
  }


}
