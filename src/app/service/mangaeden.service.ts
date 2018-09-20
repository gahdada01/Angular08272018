import { Injectable, Inject, Optional} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MangaedenService {

  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    console.log(origin);
    // this.Url = `${origin}${this.Url}`;
  }

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
