import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TabComponent } from './component/tab/tab.component';
import { AboutComponent } from './component/about/about.component';
import { ListComponent } from './component/list/list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'list', component: ListComponent },
  // { path: 'contact', component: NavComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    AboutComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
