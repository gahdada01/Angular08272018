import { Component, OnInit } from '@angular/core';
import { MangaedenService } from '../../service/mangaeden.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mangalist = {};

  constructor(private mangaedenService: MangaedenService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.mangaedenService.getList()
      .subscribe(data => {
        this.mangalist = data;
        console.log(this.mangalist);
      });
  }

}
