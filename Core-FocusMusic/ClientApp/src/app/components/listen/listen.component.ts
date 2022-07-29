import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../../song';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SongsService } from '../../songs.service';


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
  public currentSong: Song | undefined;
  private _songs: BehaviorSubject<Song[]> | undefined;

  constructor(private route: ActivatedRoute, private songService: SongsService) { 
    this._songs = songService.getSongs();

  }

  private routeSub: Subscription | undefined;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.routeId = params['id'];
      console.log(this.routeId);
    });
    this._songs?.subscribe(nxt => {
      this.currentSong = nxt.find(x => x.id == this.routeId);
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  public reset() {
    this.currentSong = undefined;
  }
}
