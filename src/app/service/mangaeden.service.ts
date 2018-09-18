import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaedenService {

  constructor(private http: HttpClient) { }

  getList(pageSize) {
    return this.http.get('https://www.mangaeden.com/api/list/0/?p=0&l=' + pageSize)
      .map(this.extract);
  }

  getPage(option) {
    const p = option.pageIndex;
    const l = option.pageSize;
    return this.http.get('https://www.mangaeden.com/api/list/0/?p=' + p + '&l=' + l)
      .map(this.extract);
  }

  getInfo(id) {
    return this.http.get('https://www.mangaeden.com/api/manga/' + id)
      .map(this.extract);
  }

  private extract(res: Response | any) {
    return res || {};
  }
}

// https://limitless-headland-61982.herokuapp.com/ | https://git.heroku.com/limitless-headland-61982.git
