import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService {

  url = 'https://udemy-ng-http-26bdc.firebaseio.com/data.json';

  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(this.url, servers, { headers: headers });
  }

  getServers() {
    return this.http.get(this.url);
  }

}
