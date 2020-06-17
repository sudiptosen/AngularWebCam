import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit, AfterViewInit {
  @ViewChild('webCam', { static: false }) webCam: any;

  constructor() { }

  ngOnInit(): void {

  }

  async ngAfterViewInit() {
    this.webCam.srcObject = null;
    this.webCam.autoplay = true;

    await navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        this.webCam.nativeElement.srcObject = stream;
      })
      .catch(err => {throw err});
  }
}
