import { Component } from '@angular/core';
import { SongModel } from './models/song-model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'focus-music';
  songs: SongModel[] = [];
  currentSong: SongModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
 
  }




}
