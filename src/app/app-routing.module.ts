import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './pages/foods/foods.component';
import { FoodComponent } from './pages/food/food.component';

const routes: Routes = [
  { path: 'foods', component: FoodsComponent, pathMatch: 'full' },
  { path: 'food-details', component: FoodComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
