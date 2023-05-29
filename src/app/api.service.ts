import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Table } from 'models/tableModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }


   headers = new HttpHeaders({
    'X-RapidAPI-Key': '54f6e9e57fmsh9e52205ab197fccp1961ffjsn5cf747416543',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  });

  getTable(): Observable<any>{
    return this.http.get('https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=71',{headers:this.headers});
  }
}

