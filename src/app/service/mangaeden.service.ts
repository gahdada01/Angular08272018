import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaedenService {

  constructor(private http: HttpClient) { }

  getList(pageSize) {
    return this.http.get('https://www.mangaeden.com/api/list/0/?p=1&l=' + pageSize)
      .map(this.extract);
  }

  getInfo(id) {
    return this.http.get('https://www.mangaeden.com/api/manga/' + id)
      .map(this.extract);
  }

  getImage(imageUrl) {
    return this.http.get(imageUrl)
      .map(this.extract);
  }

  private extract(res: Response | any) {
    return res || {};
  }
}
