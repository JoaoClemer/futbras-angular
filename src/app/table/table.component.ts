import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Table } from 'models/tableModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  constructor(private api:ApiService){

  }

  table!:Table[];

  ngOnInit(): void {

    this.api.getTable()
    .subscribe((data:Table) =>{
      this.table = data.response[0].league.standings[0];
      console.log(this.table)
    },
    error => console.log(error));

  }
}
