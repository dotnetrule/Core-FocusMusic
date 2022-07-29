import { HttpClient } from '@angular/common/http';
import { Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, from, Observable, Subject } from 'rxjs';
import { Song } from './song';

var songs = new BehaviorSubject<Song[]>([]);

@Injectable({
  providedIn: 'root'
})

export class SongsService implements OnInit {
  songs: Song[] = [];

  ngOnInit(): void {

  }

  constructor(private http: HttpClient) {
    this.load();
  }

  async load() {
    this.http.get<Song[]>('../../assets/data.json').subscribe(data => songs.next(data));
    
  }

  public getSongs() {
    return songs;
  }

}
