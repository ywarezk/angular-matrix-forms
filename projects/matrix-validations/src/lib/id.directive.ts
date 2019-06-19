import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {idValidator} from './validators';

@Directive({
  selector: "[matrixId]",
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => IdDirective)
    }
  ]
})
export class IdDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return idValidator(control);
  }
}
