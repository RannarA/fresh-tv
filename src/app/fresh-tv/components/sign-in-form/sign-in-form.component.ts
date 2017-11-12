import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.sass']
})
export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private tokenService: TokenService) { }

  signIn() {
    const user: User = {
      name: this.signInForm.value.name,
      password: this.signInForm.value.password
    };

    this.authService.signIn(user).subscribe(response => {
      if (response['success']) {
        this.tokenService.setToken(response['token']);
        this.router.navigate(['/watchlist'])
      } else {
        console.log('fail');
        this.signInForm.reset();
      }
    });
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
