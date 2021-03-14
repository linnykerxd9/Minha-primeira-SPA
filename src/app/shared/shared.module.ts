
import { InputTextComponent } from './input-text/input-text.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputDatePickerComponent } from './input-date-picker/input-date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputTextComponent,
    InputTextareaComponent,
    InputDatePickerComponent
  ],
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputTextareaComponent,
    InputDatePickerComponent,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule{ }
