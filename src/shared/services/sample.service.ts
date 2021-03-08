import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';

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

  public sampleObservable$:Observable<string>=of('niranjan naidu');

// public sampleSubject =new BehaviorSubject<string>('nira');
public sampleSubject =new Subject<string>();
public sampleSubject$: Observable<string>=this.sampleSubject.asObservable();
public sampleBehaviourSubject =new BehaviorSubject(5);
public sampleBehaviourSubject$: Observable<number>=this.sampleBehaviourSubject.asObservable();
public sampleReplaySubject = new ReplaySubject<number>(6);
public sampleReplaySubject$: Observable<number>=this.sampleReplaySubject.asObservable();

public sampleAsyncSubject =new AsyncSubject<any>();
public sampleAsyncSubject$: Observable<number>=this.sampleAsyncSubject.asObservable();

getSubject():Observable<string>{
  return this.sampleSubject$;
}
setSubject(value){
this.sampleSubject.next(value);
}
getBehSubject():Observable<number>{
  return this.sampleBehaviourSubject$;
}

setBehSubject(value){
  this.sampleBehaviourSubject.next(value);

}
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
