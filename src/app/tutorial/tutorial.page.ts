import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  showDescription: boolean[] = [false, false, false, false, false];

  toggleDescription(index: number) {
    this.showDescription[index] = !this.showDescription[index];
  }

  ngOnInit() {
  }
}
