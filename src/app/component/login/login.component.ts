import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  show: boolean = true;
  hide: boolean = false;

  registerToogle() {
    this.hide = !this.hide;
    this.show = !this.show;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private recipes: RecipeServiceService
  ) {}
  loginForm: any;
  userRegister: any;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.userRegister = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  get email() {
    return this.loginForm.get('firstname');
  }

  get password() {
    return this.loginForm.get('lastname');
  }

  loginSubmit(form: any) {
    const mygetuser = {
      email: form.value.email,
      password: form.value.password,
    };

    console.log(mygetuser);
  }

  registerSubmit(form: any) {
    const reguser = {
      email: form.value.email,
      password: form.value.password,
    };
    console.log(reguser);

    this.recipes
      .createUser(reguser)
      .subscribe((data) => this.router.navigate(['/home']));
    form.reset();
  }
}
