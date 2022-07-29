import { Component } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'focus-music';
  songs: Song[] = [];



}
