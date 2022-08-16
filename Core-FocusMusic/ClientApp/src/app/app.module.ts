import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { SongsService } from './services/songs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListenComponent } from './components/listen/listen.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CollectionComponent } from './components/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ListenComponent,
    PageNotFoundComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
