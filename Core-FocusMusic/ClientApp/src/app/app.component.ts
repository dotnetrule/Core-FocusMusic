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

  constructor(private route: ActivatedRoute) {
    console.log('ListComponent;');
  }
  private routeSub: Subscription | undefined;

  ngOnInit(): void {
      this.routeSub = this.route.params.subscribe(params => {
        console.log(params['id']) //log the value of id
        console.log(this.routeSub) //log the value of id
      });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }


}
