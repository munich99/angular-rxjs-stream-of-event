import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('click', evt => {
     //  alert('I am tiggert by Eventllistener'); 
      console.log(evt, 'I am tiggert by Eventllistener');
    });

    let counter = 1;

    setInterval(() => {
      counter++;
      console.log(counter);
    }, 1000);

    setTimeout(() => {
      console.log('I am 3rd Value Stream')
  }, 3000 )



  }

}