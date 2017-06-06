import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  url = 'https://udemy-ng-http-26bdc.firebaseio.com/data.json';
  url2 = 'https://udemy-ng-http-26bdc.firebaseio.com/data/appName.json';

  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(this.url, servers, { headers: headers });
  }

  getServers() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }

  getAppName() {
    return this.http.get(this.url2)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
