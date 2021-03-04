import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';
import { routes } from '../app-routing.module';


@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent  {

  @Input() value:string;
  @Output() outputValue=new EventEmitter<string>();
 
  routes = routes;
  viewChildResult:string="dummy value";

  constructor(public sampleService:SampleService){

  }
  ngOnInit():void{
    console.log(this.sampleService.sampleNumber)
  }
  sendValue(){
    this.outputValue.emit('value emitted from child')
  }

}
