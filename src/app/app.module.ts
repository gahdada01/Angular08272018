import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TabComponent } from './component/tab/tab.component';
import { AboutComponent } from './component/about/about.component';
import { ListComponent } from './component/list/list.component';

// Services
import { MangaedenService } from './service/mangaeden.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    AboutComponent,
    ListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'Aagular-date08272018' }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [MangaedenService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
