import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { SampleService } from 'src/shared/services/sample.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [SampleService]

})
export class SigninComponent implements OnInit {

  constructor(public sampleService: SampleService) { }

  readSample;
  readSample1;
  readSample2;
  readSample3;
  readSample4;
  readSample5;

  ngOnInit(): void {
    this.sampleService.sampleObservable$
      .subscribe((value) => {
        this.readSample = value;
      });

    this.sampleService.sampleObservable$
      .pipe(
        map((value) => {
          this.readSample2 = value;
        }))
      .subscribe();
      
      this.readSample3 = this.sampleService.sampleObservable$
      .pipe(
        tap((value):string =>  // donot mutation
          value + 'software developer'
        ))
      // .subscribe();
      this.readSample3 = this.sampleService.sampleObservable$
      .pipe(
        map((value):string => // do mutation
          value + 'software developer'
        ))
      // .subscribe();

      this.readSample4 = this.sampleService.sampleObservable$
      .pipe(
        map((value):string=> 
        value + 'software developer'
        ))
        // .subscribe();

  }

}
