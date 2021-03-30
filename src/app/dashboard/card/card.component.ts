import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  status = 0;
  @Input() card;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

  }

  onLike(card: any) {
    card.likes = card.likes + 1
    if (card.likes < 5) {
      this.status = 0;
    } else if (card.likes >= 5 && card.likes < 11) {
      this.status = 1;
    } else {
      this.status = 2;
    }

    this.httpClient.post('/api/skills', card)
  }

  onShare() {
    var url = "https://www.linkedin.com/in/nikolassoares/"
    window.open(url, "_blank");
  }

}
