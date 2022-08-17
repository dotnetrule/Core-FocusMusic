import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public selectedSong: Observable<SongModel>;
  public isPlaying: Observable<boolean>;

  constructor(private route: ActivatedRoute, private songService: SongsService)
  {  }

  private routeSub: Subscription | undefined;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.routeId = params['id'];
    });
    this.selectedSong = this.songService.activeSong$;
    this.isPlaying = this.songService.isPlaying.asObservable();
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  public reset() {
    this.songService.unsetActive();
  }
}
