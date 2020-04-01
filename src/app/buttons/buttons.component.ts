import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
   /* let timer$ = timer(3000,1000);
    timer$.subscribe( val =>{
      console.log(val + " i am a -timer- operator, also called function from reactive extension")
    });

    */

    let click$ = fromEvent(document,'click');
    click$.subscribe ( evt => {
      console.log("gecklickt " + evt.target.dispatchEvent)
    })






  }

}