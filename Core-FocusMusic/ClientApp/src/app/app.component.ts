import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Song } from './song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'focus-music';
  songs: Song[] = [];
  currentSong: Song | undefined;

  constructor() {
    console.log('ListComponent;');
  }

  ngOnInit(): void {
 
  }




}
