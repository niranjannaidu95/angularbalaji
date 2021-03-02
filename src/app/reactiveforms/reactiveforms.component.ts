import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  loginForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
    {
      username:new FormControl('niranjan',[Validators.required, Validators.maxLength(10),
      Validators.pattern(/[^0-9a-zA-Z]+$/)]),
      password:new FormControl("123456"),
      confirmpassword:new FormControl("123456"),

      email:new FormControl("niranjannaidu@gmail.com",[Validators.email]),
      comments:new FormArray([])
    },
    this.customerValidators
    );
    this.addField();
    this.addField();
    this.addField();
    this.addField();
    this.addField();
    this.addField();


    this.userNamevalueChange()
   this. userNameStatusChanges()
  }
  addField(){
    let arr = this.f.controls['comments'] as FormArray;
    arr.push(new FormControl('newly added'));
  }

  removeField(i:number){
    let arr = this.f.controls['comments'] as FormArray;
    arr.removeAt(i);
  }
  
customerValidators(fgroup:FormGroup){
return fgroup.get('password').value === fgroup.get('confirmpassword').value
? null : {'mismatch':true};

}

get username(){
return this.loginForm.get('username')
}

get f(){
  return this.loginForm;
}




  userNamevalueChange(){
this.username.valueChanges.pipe(
  map(name=> console.log(name))
).subscribe();
  }

userNameStatusChanges(){
  this.username.statusChanges.pipe(
  map(name=> console.log(name))
  ).subscribe();

}

  login(){
   let val= this.loginForm.controls['username'].value
   let password=this.loginForm.controls['password'].value
   let email=this.loginForm.controls['email'].value
  }
}
