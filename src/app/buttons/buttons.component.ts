import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let interval$ = interval(1000);
    let timer$ = timer(3000,1000);

    interval$.subscribe( val => {
      console.log(val + " i am a stream Definition")
    });

    timer$.subscribe( val =>{
      console.log(val + " i am a -timer- operator, also called function from reactive extension")
    })


  }

}