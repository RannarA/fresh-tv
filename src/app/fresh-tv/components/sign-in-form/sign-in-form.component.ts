import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.sass']
})
export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  signIn() {
    const user: User = {
      name: this.signInForm.value.name,
      password: this.signInForm.value.password
    };

    this.authService.signIn(user).subscribe(response => {
      console.log('asdasd')
      if (response['success']) {
        this.authService.setToken(response['token']);
        this.router.navigate(['/watchlist'])
      } else {
        console.log('fail');
        // this.signInForm.reset();
      }
    }, err => {
      console.error(err);
    });
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
