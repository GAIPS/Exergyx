import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'http://tst.nro.pt:8080';

  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getEvents() {
    return this.request('GET', `${this.serverUrl}/event`);
  }

  createEvent(event: any) {
    return this.request('POST', `${this.serverUrl}/event`, event);
  }
}
