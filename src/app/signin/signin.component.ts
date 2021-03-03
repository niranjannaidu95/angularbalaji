import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers:[SampleService]

})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
