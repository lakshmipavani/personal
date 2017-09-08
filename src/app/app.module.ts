import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angualr/forms';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormattedPageComponent } from './formatted-page/formatted-page.component';
import {appRouterModule} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    FormattedPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
