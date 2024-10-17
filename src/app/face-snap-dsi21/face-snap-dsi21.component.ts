import { Component, Input, input } from '@angular/core';
import { facesnap } from '../models/face-snap.module';

@Component({
  selector: 'app-face-snap-dsi21',
  templateUrl: './face-snap-dsi21.component.html',
  styleUrl: './face-snap-dsi21.component.css'
})
export class FaceSnapDSI21Component {
  title!:string;
  description!:string;
  creatdate!:Date;
  snaps!:number;
  imageurl!:string;
  buttontext!:string;
 @Input()fs!:facesnap;
  

  ngOnInit(){
    this.buttontext="Oh Snap !";
  }
  onAddSnap(){
    if(this.buttontext==="Oh Snap !"){
      this.fs.snaps++;
      this.buttontext="oops unsnap!";
    }else{
      this.fs.snaps--;
      this.buttontext="Oh Snap !"
    }
  }
}
