import { Component } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';
import { routes } from '../app-routing.module';


@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent  {

  routes = routes;
  constructor(public sampleService:SampleService){

  }
  ngOnInit():void{
    console.log(this.sampleService.sampleNumber)
  }

}
