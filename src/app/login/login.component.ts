import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
title:string="this is my first project";
public username:string;
public password:string;
public errorMessage:string;
public submit:string="submit";

  constructor() { 
  }

  ngOnInit(): void {
  }

  signin():void{
    const username=!this.username;
    if(!this.username){
   this.errorMessage="enter the username";
   return;
  }else if(this.password === undefined){

    this.errorMessage="enter password";
    return;
  }
  alert("login successfully!!")
  }
  }
