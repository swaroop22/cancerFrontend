import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";
import {API_URL} from './global.constants';


@Injectable()
export class SubcancertypeService {

  private ApiUrl = API_URL + '/subCancerType1ControllerById';

  constructor(private http: Http) {
  }

  getAllSubCancerTypes1(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

  getSubCancerTypes(id: number): Observable<any> {
    var url = this.ApiUrl + "/" + id.toString();
    return this.http.get(url).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

  addSubCancerTypes(obj): Observable<any> {
    var url = this.ApiUrl + '/add';
    return this.http.post(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  editSubCancerTypes(obj): Observable<any> {
    var url = this.ApiUrl + '/edit';
    return this.http.put(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  deleteSubCancerTypes(id: number): Observable<any> {
    return this.http.delete(this.ApiUrl + '/' + id).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

}
