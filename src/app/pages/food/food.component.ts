import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import apiCall from 'src/app/utils/apiCall';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  id!: string;
  food: any = { loaded: false, data: {} };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];

      this.getFoodDetails(this.id);
    });
  }

  async getFoodDetails(id: string) {
    const res = await apiCall({ url: `lookup.php?i=${id}`, method: 'GET' });

    if (res.status === 200) {
      this.food = { loaded: true, data: res.data.meals[0] };

      console.log(res.data.meals[0]);
    }
  }
}
