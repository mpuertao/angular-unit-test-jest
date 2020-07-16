import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecoveredListComponent } from './recovered/recovered-list/recovered-list.component';
import { RecoveredPipe } from './shared/pipes/recovered.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RecoveredListComponent,
    RecoveredPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
