import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  fromGroup: FormGroup;
  constructor(
    private formBuild: FormBuilder
  ) { 

  }
  
  ngOnInit() {
    this.fromGroup = this.formBuild.group({
      firstName: this.formBuild.control('supa'),
      lastName: this.formBuild.control('taget'),
      Email: this.formBuild.control('Email'),
      age:this.formBuild.control('age')
    })
  }
  onSubmit(form: FormGroup){
    const {firstName,lastName,Email,age} = form.value;
    const user = new User(firstName,lastName,Email,age);
    console.log(form);
  }
}
