import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";
import {API_URL} from './global.constants';



@Injectable()
export class PatientsService {
  private ApiUrl = API_URL +'/patientController/';

  constructor(private http: Http) {
  }

  getPatients(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

  addPatientTypes(obj): Observable<any> {

    var url = this.ApiUrl + 'add';
    return this.http.post(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  editPatientTypes(obj): Observable<any> {

    var url = this.ApiUrl  + 'edit';
    return this.http.put(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  deletePatientTypes(id: number): Observable<any> {
    return this.http.delete(this.ApiUrl + id).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }


}
