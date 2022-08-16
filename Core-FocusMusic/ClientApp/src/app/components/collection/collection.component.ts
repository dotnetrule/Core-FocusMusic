import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongModel } from '../../models/song-model';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass']
})

export class CollectionComponent implements OnInit {
  public songs: SongModel[] | undefined;

  constructor(private _songService: SongsService) {
    this._songService.getSongs()?.subscribe(data => {
      this.songs = data;
    },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification'));
  }

  ngOnInit(): void {

  }



}
