import { HttpClient } from '@angular/common/http';
import { Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, from, Observable, Subject } from 'rxjs';
import { EnumCategory } from '../models/enum-category';
import { EnumGenre } from '../models/enum-genre';
import { SongCollectionModel } from '../models/song-collection-model';
import { SongModel } from '../models/song-model';


@Injectable({
  providedIn: 'root'
})

export class SongsService {
  public songs = new BehaviorSubject<SongModel[]>([]);
  public activeSong$: BehaviorSubject<SongModel> = new BehaviorSubject<SongModel>(null);
  public songCollectionModel: SongCollectionModel[];

  constructor(private http: HttpClient) {
    this.load();
  }

  async load() {
    const genres = Object.values(EnumGenre);
    this.http.get<SongModel[]>('../../assets/data.json').subscribe(data => this.songs.next(
      data.sort())
    );    
  }

  public getSongs() {
    return this.songs;
  }

  public getSongCollection() {
    var categories = [EnumCategory.MMORPG, EnumCategory.Fighting, EnumCategory.Fantasy,  EnumCategory.ScienceFiction];
    this.songCollectionModel = [];

    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      var collection = new SongCollectionModel();
      collection.id = i;
      collection.category = category;
      collection.songs = [];
      collection.name = category.toString();
      var filtered = this.getSongs().value.filter(x => x.category === category);
      console.log('category', category);

      if (filtered.length>0) {
        console.log('filtered',filtered);
        for (var j = 0; j < filtered.length; j++) {
          console.log('filtered', filtered[j]);
          collection.songs.push(filtered[j]);

        }
      }

      this.songCollectionModel.push(collection);
    }
    console.log(this.songCollectionModel);
    return this.songCollectionModel;
  }


  public getActiveSong(): Observable<SongModel> {
    return this.activeSong$.asObservable();
  }

  public getSongById(id:number) {
    return this.songs.value.filter(x=>x.id==id)[0];
  }

  public setActive(song: SongModel) {
    this.activeSong$.next(song);
  }

  public compare(a: SongModel, b: SongModel) {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  }
}
