import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {from, Observable} from 'rxjs';
import {delay, filter, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable()

export class CommonService {


  constructor(private http: HttpClient) {
  }

  postData(url, data) {
    url = environment.baseUrl + url
    return this.http.post(url, data)
  }

  putData(url, data) {
    url = environment.baseUrl + url
    return this.http.put(url, data)
  }

  delete(url, id) {
    url = environment.baseUrl + url + "/" + id
    // url =`${environment.baseUrl}${url}/${id}`
    return this.http.delete(url)
  }

  getData(url) {
    url = environment.baseUrl + url
    return this.http.get(url)
  }

}
