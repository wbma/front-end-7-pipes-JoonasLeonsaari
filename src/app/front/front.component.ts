
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(private router: Router, private mediaService: MediaService) { }

  files: any;

  ngOnInit() {
    if(localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }

    this.mediaService.getNewFiles().subscribe( data => {
      this.files = data;
    })
  }

}
