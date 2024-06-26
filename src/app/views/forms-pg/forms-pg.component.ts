import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  templateUrl: './forms-pg.component.html',
  styleUrl: './forms-pg.component.scss',
})
export class FormsPgComponent {
  jobForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }
  getJobs(): FormArray {
    return this.jobForm.get('jobs') as FormArray;
  }
  getNewJob(): FormGroup {
    return this.fb.group({
      companyName: new FormControl(null),
      companyWebPage: new FormControl(null),
      companyDescription: new FormControl(null),
      positions: this.fb.array([]),
    });
  }
  getPositions(jobIndex: number): FormArray {
    return this.getJobs().at(jobIndex).get('positions') as FormArray;
  }
  getNewPosition(): FormGroup {
    return this.fb.group({
      positionName: new FormControl(null),
      positionLevel: new FormControl(null),
      positionDescription: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
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
    console.log(this.getPositions(jobIndex));
    this.getPositions(jobIndex).push(this.getNewPosition());
  }
  removePositionBtnClick(jobIndex: number, positionIndex: number) {
    this.getPositions(jobIndex).removeAt(positionIndex);
  }
}
