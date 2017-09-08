import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  template: `
    <p>               
      list-page Works!
    </p>
    <input type='text' onEnter=addTask()></input>

  `,
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  this.taskList=[{
  details:string;
  }];
  addTask(){
     
  }

}
