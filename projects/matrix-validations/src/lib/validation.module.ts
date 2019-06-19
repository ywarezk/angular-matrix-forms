import {NgModule} from '@angular/core';
import {IdDirective} from './id.directive';
import {MatrixCityComponent} from './city.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [IdDirective, MatrixCityComponent],
  exports: [IdDirective, MatrixCityComponent]
})
export class ValidationModule {}
