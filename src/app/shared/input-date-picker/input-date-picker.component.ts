import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'app-input-date-picker',
  templateUrl: './input-date-picker.component.html',
  styleUrls: ['./input-date-picker.component.css'],
})



export class InputDatePickerComponent implements OnInit {

  constructor() { }
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;
  ngOnInit(): void {
  }
  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
