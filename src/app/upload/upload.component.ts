import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  title: string;
  description: string;
  formData: FormData = new FormData();

  constructor(private router: Router, private media: MediaService) { }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
  }

  setFile() {
    if (!this.file || !this.title) { // if file or title are empty dont do nothing
      alert('Please fill all neccessary fields!');
    } else {
      this.formData.append('file', this.file); // file
      this.formData.append('title', this.title); // title
      this.formData.append('description', this.description); // desc.
      this.media.uploadFile(this.formData);
    }
  }

  // fileInfo for debugging
  fileInfo(event) {
    console.log(event);
    console.log('filename: ' + event.target.files[0].name);
    console.log('file type: ' + event.target.files[0].type);
    console.log('file size: ' + event.target.files[0].size);
    this.file = event.target.files[0];
  }

}
