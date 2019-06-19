import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export const idValidator : ValidatorFn = (control : AbstractControl) : ValidationErrors | null => {
  if (control.value && control.value.match(/[0-9]+/)) {
    return null;
  } else {
    return {
      'id': true
    }
  }
}
