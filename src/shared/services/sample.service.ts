import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class SampleService {

  constructor() { }
  output:number=0;
  public sampleData:string="nirasample";
  public sampleNumber:number=0;

sampleAdder(a,b){
  return a+b;
}
get increment(){
  return this.output;
}
set increment(a){
  this.output+=a;

}

}
