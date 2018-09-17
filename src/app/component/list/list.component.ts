import { Component, OnInit } from '@angular/core';
import { MangaedenService } from '../../service/mangaeden.service';

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

  constructor(private mangaedenService: MangaedenService) { }

  ngOnInit() {
    this.showMangaedenList(this.pageSize);
  }

  isRedered(id) {
    console.log(id);
    this.discription = null;
    this.url = null;

    this.mangaedenService.getInfo(id)
      .subscribe(data => {
        this.discription = data.description;
        this.url = 'https://cdn.mangaeden.com/mangasimg/' + data.image;
        console.log(this.url);

        this.mangaedenService.getImage(this.url)
          .subscribe(image => {
            // console.log(image);
            this.url = image;
          });

      });

  }

  paginator() {
    console.log('click paginator');
  }

  showMangaedenList(pageSize) {
    this.mangaedenService.getList(pageSize)
      .subscribe(data => {
        this.mangalist = data.manga;
        this.page = data.page;
        this.total = data.total;
      });
  }

}
