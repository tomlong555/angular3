import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { from } from 'rxjs';
import { User } from '../user';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  fromGroup: FormGroup;
  @Output() change = new EventEmitter();
  constructor(
    private formBuild: FormBuilder
  ) { 

  }
  
  ngOnInit() {
    this.fromGroup = this.formBuild.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(3)]],
      Email: ['',[this.EmailValidator]],
      age:['',[Validators.max(99),Validators.min(0)]]
    })
  }
  onSubmit(form: FormGroup){
    // console.log(form.valid,form.invalid);
    // console.log(<FormControl>form.get('firstName').errors);
    if(form.valid){

      const {firstName,lastName,Email,age} = form.value;
      const user = new User(firstName,lastName,Email,age);
      this.change.emit(user);
      console.log(user);
    }else{
      ['firstName','lastName','Email','age'].forEach((key:string)=>{
        console.log(form.get(key).errors)
        form.get(key).markAsTouched();
      })
    } 
  }
  EmailValidator(control:AbstractControl){
    const value:string = control.value;
    if(value && value.includes('@')){
      return null;
    }
    return{
      email:true
    }  
  }
}
