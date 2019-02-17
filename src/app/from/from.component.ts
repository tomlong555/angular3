import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      firstName: this.formBuild.control(''),
      lastName: this.formBuild.control('')
    })
  }

}
