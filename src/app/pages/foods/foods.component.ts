import { Component, OnInit } from '@angular/core';
import apiCall from '../../utils/apiCall';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent implements OnInit {
  foods: any = { loaded: false, data: [] };
  category: string = '';
  categories: any = { loaded: false, data: [] };

  selected = '';

  constructor() {}

  ngOnInit(): void {
    this.getFoods();
    this.getCategories();
  }

  async getFoods() {
    const res = await apiCall({
      url: `search.php?s=${this.selected ? this.selected : ''}`,
      method: 'GET',
    });

    if (res.status === 200) {
      this.foods = { loaded: true, data: res.data.meals };
    }
  }

  async getCategories() {
    const res = await apiCall({
      url: `categories.php`,
      method: 'GET',
    });

    if (res.status === 200) {
      this.categories = { loaded: true, data: res.data.categories };
    }
  }
}
