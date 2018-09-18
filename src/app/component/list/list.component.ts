import { Component, OnInit } from '@angular/core';
import { MangaedenService } from '../../service/mangaeden.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mangalist = [];
  discription:String;
  total:Number;
  page:Number;
  pageSize:Number = 25;
  url:String;

  // MatPaginator Output
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [25, 100, 500, 1500];

  constructor(private mangaedenService: MangaedenService) { }

  ngOnInit() {
    this.showMangaedenList(this.pageSize);
  }

  urlF(data) {
    if (data != null) {
      const httpsBool = data.includes('https');
      const httpBool = data.includes('http');

      if (httpsBool || httpBool) {
        this.url = data;
      } else {
        this.url = 'https://cdn.mangaeden.com/mangasimg/' + data;
      }
    } else {
      this.url = '/src/assets/img/img1.jpeg';
    }
  }

  isRedered(id) {
    this.discription = null;
    this.url = null;

    this.mangaedenService.getInfo(id)
      .subscribe(data => {
        this.discription = data.description;

        if (data.image == null) {
          this.urlF(data.imageURL);
        } else {
          this.urlF(data.image);
        }
      });
  }

  showMangaedenList(pageSize) {
    this.mangaedenService.getList(pageSize)
      .subscribe(data => {
        this.mangalist = data.manga;
        this.page = data.page;
        this.total = data.total;
      });
  }

  getPage(option) {
    this.mangaedenService.getPage(option)
      .subscribe(data => {
        this.mangalist = data.manga;
      });
  }

}
