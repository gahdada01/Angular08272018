import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  navLinks = [
    {path: 'home', label: 'Home'},
    {path: 'list', label: 'Manga List'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
