import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private media: MediaService) { }

  files: any;

  ngOnInit() {
    this.media.getMedia().subscribe( data => {
      console.log(data);
      this.files = data;
    });
  }

}
