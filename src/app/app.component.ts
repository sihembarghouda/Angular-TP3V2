import { Component ,OnInit} from '@angular/core';
import { facesnap } from './models/face-snap.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  faceSnaps!: facesnap[];
  
  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageurl: 'https://cdn.pixabay.com/photo/2024/02/02/15/38/ai-generated-8548454_640.jpg',
        createdate: new Date(),
        snaps: 0
      },
      {
        title: 'three rock mountain',
        description: 'une endroit tellement magnifique',
        imageurl: 'https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-mountain-peaks-and-rocks-in-the-afternoon-image_841406.jpg',
        createdate: new Date(),
        snaps: 0
      },
      {
        title: 'cest un bon repas',
        description: 'yumm c bon :)',
        imageurl: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/9545/conversions/healthy-superfoods-thumb.jpg',
        createdate: new Date(),
        snaps: 0
      }
    ];
  }
}




