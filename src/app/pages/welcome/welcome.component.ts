import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  thirdFormGroup: FormGroup = new FormGroup({});
  fourthFormGroup: FormGroup = new FormGroup({});
  fifthFormGroup: FormGroup = new FormGroup({});
  sixthFormGroup: FormGroup = new FormGroup({});
  seventhFormGroup: FormGroup = new FormGroup({});
  eightFormGroup: FormGroup = new FormGroup({});
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      lastFatherName: [''],
      lastMotherName: [''],
      age: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      subject: [''],
      agreement: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({});
    this.fifthFormGroup = this._formBuilder.group({});
    this.sixthFormGroup = this._formBuilder.group({});
    this.seventhFormGroup = this._formBuilder.group({});
  }

}
