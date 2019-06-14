import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulartutorial';
  query: string;
  artists: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  constructor( private http: HttpClient ) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.artists = data;
      })
  }
}
