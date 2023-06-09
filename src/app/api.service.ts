import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  apiUrl = "https://api-football-v1.p.rapidapi.com/v3";
  currentDate = "2023-05-30";

   headers = new HttpHeaders({
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  });

  getTable(): Observable<any>{
    return this.http.get(`${this.apiUrl}/standings?season=2023&league=71`,{headers:this.headers});
  }

  getNextRounds() :Observable<any>{
    return this.http.get(`${this.apiUrl}/fixtures?league=71&season=2023&next=10`,{headers:this.headers});
  }

  getTeams() :Observable<any>{
    return this.http.get(`${this.apiUrl}/teams?league=71&season=2023`,{headers:this.headers});
  }

  getLastRoundsById(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/fixtures?league=71&season=2023&last=3&team=${id}`, {headers: this.headers})
  }

  getNextRoundsById(id:number) :Observable<any>{
    return this.http.get(`${this.apiUrl}/fixtures?league=71&season=2023&next=3&team=${id}`,{headers:this.headers});
  }

}

