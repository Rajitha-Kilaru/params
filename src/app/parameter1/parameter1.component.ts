import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter1',
  templateUrl: './parameter1.component.html',
  styleUrls: ['./parameter1.component.css']
})
export class Parameter1Component implements OnInit {
	paraname: string;
  constructor() {
  		this.paraname = ''
   }

  ngOnInit(): void {
  }
  // navParam() {
  // 	console.log(this.paraname);
  // }
}
