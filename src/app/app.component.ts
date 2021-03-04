import { AfterViewInit } from '@angular/core';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';
import { LeftnavComponent } from './leftnav/leftnav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SampleService]
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterViewInit {
  [x: string]: any;
 
  title = 'angularproject';
  nira: string;
  value:string="i am from parent"

  @ViewChild(LeftnavComponent) child;

constructor(public sampleService:SampleService){

}
  ngOnChanges() {
    // this.sampleService.sampleNumber= this.sampleService.sampleNumber += 1;
    // console.log( this.sampleService.sampleNumber)
  }


ngOnInit(){
  this.nira=this.sampleService.sampleData;
}
ngDoCheck(){
//   this.sampleService.sampleNumber= this.sampleService.sampleNumber += 1;
//  console.log( this.sampleService.sampleNumber)
}
ngAfterViewInit(){
  console.log(this.child.viewChildResult);
}

btn(){
  this.sampleService.increment=12;
  const  incementedValue=this.sampleService.increment;
    this.sampleService.sampleNumber += this.sampleService.sampleAdder (4,5)+incementedValue;
}
outputDisplay;
receiveData($event){
  this.outputDisplay = $event;
console.log($event);
}



}