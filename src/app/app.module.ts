import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodsComponent } from './pages/foods/foods.component';
import { FoodComponent } from './pages/food/food.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodComponent,
    SideNavComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
