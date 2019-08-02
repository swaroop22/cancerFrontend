import {Injectable} from '@angular/core';
import {API_URL} from './global.constants';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class SubcancerlevelsService {
  private ApiUrl = API_URL + '/subCancerLevelsControllerById';

  constructor(private http: Http) {
  }

  getAllSubCancerLevels(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

  addSubCancerLevels(obj): Observable<any> {
    var url = this.ApiUrl + '/add';
    return this.http.post(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  editSubCancerLevels(obj): Observable<any> {
    var url = this.ApiUrl + '/edit';
    return this.http.put(url, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  deleteSubCancerLevels(id: number): Observable<any> {
    return this.http.delete(this.ApiUrl + '/' + id).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

}
