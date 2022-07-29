import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../../song';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


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

  @Input() song: Song | undefined;


  constructor() { 
    console.log('ListComponent;');
  }
  
  ngOnInit(): void {

  }



}
