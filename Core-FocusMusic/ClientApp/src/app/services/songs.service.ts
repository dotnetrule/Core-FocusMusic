import { HttpClient } from '@angular/common/http';
import { Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, from, Observable, Subject } from 'rxjs';
import { EnumGenre } from '../models/enum-genre';
import { Song } from '../models/song-model';


@Injectable({
  providedIn: 'root'
})

export class SongsService {
  public songs = new BehaviorSubject<Song[]>([]);
  public activeSong: BehaviorSubject<Song> | undefined;

  constructor(private http: HttpClient) {
    this.load();
  }

  async load() {
    const genres = Object.values(EnumGenre);
    this.http.get<Song[]>('../../assets/data.json').subscribe(data => this.songs.next(
      data.sort())
    );

    this.activeSong = undefined;
    
  }

  public getSongs() {
    return this.songs;
  }

  public getSongById(id:number) {
    return this.songs.value.filter(x=>x.id==id)[0];
  }


  public compare(a:Song, b:Song) {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  }
}
