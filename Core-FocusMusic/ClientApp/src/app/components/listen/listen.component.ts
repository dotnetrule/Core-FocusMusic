import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../../song';


@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.sass'],
})

export class ListenComponent implements OnInit {
  playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1,
  };

  constructor(private http: HttpClient) { 
    var songs = this.load();
    console.log('ListComponent;',songs);
  }
  
  ngOnInit(): void {
  }

  load() {
    this.http.get('../../assets/json/data.json').subscribe((res) => {
      return res;
    });
  }
}
