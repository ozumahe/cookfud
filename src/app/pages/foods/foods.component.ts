import { Component, OnInit } from '@angular/core';
import apiCall from '../../utils/apiCall';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent implements OnInit {
  foods: any = { loaded: false, data: [] };

  constructor() {}

  ngOnInit(): void {
    this.getFoods();
  }

  async getFoods() {
    const res = await apiCall({ url: `search.php?s=`, method: 'GET' });

    if (res.status === 200) {
      this.foods = { loaded: true, data: res.data.meals };
    }
  }
}
