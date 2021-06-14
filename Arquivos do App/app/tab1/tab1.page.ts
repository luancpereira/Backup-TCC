import { Component } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ip: any = '';
  servo: any = '';
  tempo: Number = 0;
  srv1: number = 1;
  srv2: number = 1;

  constructor(private http: Http) { }


  logForm(){
    console.log(this.ip);
    console.log(this.servo);
    console.log(this.tempo);
    console.log(this.srv1);
    console.log(this.srv2);
  }

  sendInfoToArduino(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );

    this.http.post('http://'+this.ip+':8080/infoservo',{
      'sr1': this.srv1,
      'sr2': this.srv2,
      'tempo': this.tempo
    }, { headers : headers }).toPromise().then((resp)=>{
      console.log(resp);
    }).catch((err)=>{ 
      console.log(err);
    });
  }
}
