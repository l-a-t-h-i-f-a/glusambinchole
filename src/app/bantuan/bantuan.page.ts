import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bantuan',
  templateUrl: './bantuan.page.html',
  styleUrls: ['./bantuan.page.scss'],
})
export class BantuanPage implements OnInit {

  showDescription: boolean[] = [false, false, false, false, false];

  toggleDescription(index: number) {
    this.showDescription[index] = !this.showDescription[index];
  }

  ngOnInit() {
  }

}
