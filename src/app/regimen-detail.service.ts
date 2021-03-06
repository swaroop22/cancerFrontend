/* tslint:disable */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";
import {API_URL} from './global.constants';


@Injectable()
export class RegimenDetailService {

  private ApiUrl = API_URL + '/regimenDetailController/';

  constructor(private http: Http) {
  }

  getRegimens(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map(response => {
      return response.json();
    }))
    onerror: ((error) => {
      return error;
    })

  }


  getRegimenDetails(id: number): Observable<any> {
    var url = this.ApiUrl  + id.toString() +'/names';
    return this.http.get(url).pipe(map(response => {
      return response.json();
    }))
    onerror: ((error) => {
      return error;
    })

  }

  addRegimenDetail(obj): Observable<any> {
    var url = this.ApiUrl + '/add';
    return this.http.post(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  updateRegimenDetail(obj): Observable<any> {
    return this.http.put(this.ApiUrl + obj.id, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  deleteRegimenDetail(id: number): Observable<any> {
    return this.http.delete(this.ApiUrl  + id).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }


}
