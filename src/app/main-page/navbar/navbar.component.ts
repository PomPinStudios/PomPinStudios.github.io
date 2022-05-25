import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  audioControl()
  {
    const myAudio = document.getElementById(
      "audio"
    ) as HTMLAudioElement | null;

    if(myAudio?.paused) {
        myAudio?.play();
    }
    else {
       myAudio?.pause();
    }
  }


}
