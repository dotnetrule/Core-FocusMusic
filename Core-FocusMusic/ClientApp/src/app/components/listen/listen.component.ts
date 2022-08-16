import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SongModel } from '../../models/song-model';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.sass'],
})

export class ListenComponent implements OnInit {
  public playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1,
  };

  public routeId = 0;
  public selectedSong: Song | undefined;
  private _songs: BehaviorSubject<SongModel[]> | undefined;

  constructor(private route: ActivatedRoute, private songService: SongsService) { 
    this._songs = songService.getSongs();
  }

  private routeSub: Subscription | undefined;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.routeId = params['id'];
      console.log(this.routeId);
    });
    if (this.routeId != 0) {
      this.selectedSong = this.songService.getSongById(this.routeId);
    }
    
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  public reset() {
    this.selectedSong = undefined;
  }
}
