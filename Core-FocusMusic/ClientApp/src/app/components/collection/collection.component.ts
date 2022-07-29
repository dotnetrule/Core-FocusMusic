import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../../song';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass']
})
export class CollectionComponent implements OnInit {
  jsonDataResult:any = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  ngOnInit(): void {
  }

  load() {
    this.http.get('../../assets/json/data.json').subscribe((res) => {
      this.jsonDataResult = res;
      console.log('--- result :: ', this.jsonDataResult);
    });
  }

}
