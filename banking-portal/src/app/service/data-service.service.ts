import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {
    constructor(private http:Http) { }

    sendData(data){
  
      return this.http.post('https://login-test-data.firebaseio.com/data.json',data).subscribe(
          (data)=>{
             
          }
      );
      
    }
    getData(){
      return this.http.get('https://login-test-data.firebaseio.com/data.json');
    }
  
}
