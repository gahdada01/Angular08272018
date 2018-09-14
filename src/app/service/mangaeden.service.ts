import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaedenService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://www.mangaeden.com/api/list/0/?p=0');
  }
}
