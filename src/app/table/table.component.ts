import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  constructor(private api:ApiService){

  }

  table$!:Observable<any>;


  ngOnInit(): void {

    this.table$ = this.api.getTable();

  }
}
