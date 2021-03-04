import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

getYahoo(){
  return this.httpClient.get('https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?region=IN&lang=en-IN&includePrePost=false&interval=1d&useYfid=true&range=1y&corsDomain=in.finance.yahoo.com&.tsrc=finance')
}
}