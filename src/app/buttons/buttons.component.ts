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

      console.log(evt, 'I am tiggert by Eventllistener');

      setTimeout(() => {
        let counter = 1;
          console.log('I am 3rd Value Stream and i am starting 2rd Stream of Value');
          setInterval(() => {
            counter++;
            console.log(counter);
          }, 1000);
      }, 3000 ); 

    });

    







  }

}