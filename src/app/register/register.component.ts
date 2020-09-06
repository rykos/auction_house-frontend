import { AuthenticationService } from './../_services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('invalid');
      return;
    }
    this.loading = true;
    this.authenticationService.register(this.f.email.value, this.f.username.value, this.f.password.value).subscribe(
      {
        complete: () => { console.log("Succeded") },
        error: err => {
          this.loading = false;
          console.log(err);
        }
      }
    );
  }

}
