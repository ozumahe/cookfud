import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [MatProgressSpinnerModule];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
