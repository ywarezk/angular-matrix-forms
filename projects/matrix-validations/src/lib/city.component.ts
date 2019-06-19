/**
 * <matrix-city [(ngModel)]="city"></matrix-city>
 */

import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const cities = [
  'tel aviv',
  'ramat gan',
  'herzelia',
  'haifa'
]

@Component({
  selector: 'matrix-city',
  template: `
    <div>
      <input type="text" [(ngModel)]="valueChange" (focus)="_onTouchedCb()" />
      <div>
        <ul>
          <li *ngFor="let city of filteredCities" (click)="userClickedCity(city)">
            {{city}}
          </li>
        </ul>
      </div>
    </div>
    
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MatrixCityComponent)
    }
  ]
})
export class MatrixCityComponent implements ControlValueAccessor{
  writeValue(initialValue : string): void {
    this.userSelected = initialValue;
    this.valueChange = initialValue;
  }

  registerOnChange(fn: any): void {
    this._onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCb = fn;
  }

  originalCities = cities;
  filteredCities = cities;
  private _value = '';
  public userSelected;
  private _onChangeCb;
  public _onTouchedCb;


  set valueChange(newValue: string) {
    this._value = newValue;
    if (!newValue) {
      this.filteredCities = cities
    } else {
      this.filteredCities = this.originalCities.filter((singleCity : string) => {
        return singleCity.indexOf(newValue) !== -1;
      });
    }
    this._onTouchedCb && this._onTouchedCb();
  }

  get valueChange() {
    return this._value;
  }

  userClickedCity = (city : string) => {
    this.userSelected = city;
    this._onChangeCb(this.userSelected);
  }
}
