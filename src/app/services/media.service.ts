import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  username: string;
  password: string;
  status: string;
  email: string;
  title: string;

  constructor(public http: HttpClient, private router: Router) {
  }

  private formValidation(): boolean {
    if (!this.username) {
      alert('please check that all required fields have been filled');
      return false;
    } else if (!this.password) {
      alert('please check that all required fields have been filled');
      return false;
    } else if (!this.email) {
      alert('please check that all required fields have been filled');
      return false;
    } else {
      return true;
    }
  }

  public register() {
    if (this.formValidation()) {
      console.log('username' + this.username);
      console.log('password' + this.password);
      console.log('email' + this.email);

      const body = {
        username: this.username,
        password: this.password,
        email: this.email,
      };
      this.http.post(this.apiUrl + '/users', body).subscribe(data => {
        console.log(data);
        this.login();
      });
    }
  }

  public login() {
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);

    const body = {
      username: this.username,
      password: this.password,
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + '/login', body, settings).
      subscribe(response => {
        console.log(response['token']);
        localStorage.setItem('token', response['token']);
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
        this.status = error.error.message;
      });
  }

  postUserFile(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };
    return this.http.post(this.apiUrl + '/media', formData, settings);
  }
}
