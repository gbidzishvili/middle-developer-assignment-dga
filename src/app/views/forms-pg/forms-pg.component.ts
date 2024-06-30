import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomValidationsService } from './services/custom-validations.service';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@Component({
  selector: 'app-forms-pg',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CustomSelectComponent,
  ],
  templateUrl: './forms-pg.component.html',
  styleUrl: './forms-pg.component.scss',
})
export class FormsPgComponent {
  jobForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customValidation: CustomValidationsService
  ) {
    this.jobForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }
  getJobs(): FormArray {
    return this.jobForm.get('jobs') as FormArray;
  }
  getNewJob(): FormGroup {
    return this.fb.group({
      companyName: [null, [this.customValidation.maxLength]],
      companyWebPage: [null],
      companyDescription: [null],
      positions: this.fb.array([]),
    });
  }
  getPositions(jobIndex: number): FormArray {
    return this.getJobs().at(jobIndex).get('positions') as FormArray;
  }
  getNewPosition(): FormGroup {
    return this.fb.group({
      positionName: ['rame'],
      positionLevel: [null],
      positionDescription: [null],
      startDate: [null],
      endDate: [null],
    });
  }

  // functions for markup

  addNewJobBtnClick(): void {
    this.getJobs().push(this.getNewJob());
  }

  removeJobBtnClick(idx: number): void {
    this.getJobs().removeAt(idx);
  }

  addNewPositionBtnClick(jobIndex: number): void {
    this.getPositions(jobIndex).push(this.getNewPosition());
    console.log(
      'ramee',
      (this.getPositions(0) as FormArray).at(0),
      (this.getPositions(0) as FormArray).at(0).get('positionLevel')
    );
  }
  removePositionBtnClick(jobIndex: number, positionIndex: number) {
    this.getPositions(jobIndex).removeAt(positionIndex);
  }
}
