import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SampleService]
})
export class AppComponent implements OnInit,OnChanges,DoCheck {
 
  title = 'angularproject';
  nira: string;


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
btn(){
  this.sampleService.increment=12;
  const  incementedValue=this.sampleService.increment;
    this.sampleService.sampleNumber += this.sampleService.sampleAdder (4,5)+incementedValue;
}




}