import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getYahoo().subscribe();
  }

}
