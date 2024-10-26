import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  showDescription: boolean[] = [false, false, false, false, false];

  toggleDescription(index: number) {
    this.showDescription[index] = !this.showDescription[index];
  }

  ngOnInit() {
  }

}
