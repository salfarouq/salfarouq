import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    // Check if user exists in the table
    const email = this.form.value.email;
    const password = this.form.value.password;

    // Perform your logic to check if the user exists
    // You can use a service or make an HTTP request to check the credentials
    const userExists = this.checkUserExists(email, password);

    if (userExists) {
      console.log('Login successful');
      // Redirect to home component
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid email or password');
      // Display an error message or perform any other action for unsuccessful login
    }
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

  onSignUp() {
    // Redirect to register component
    this.router.navigate(['/register']);
  }

  private checkUserExists(email: string, password: string): boolean {
    // Implement your logic to check if the user exists in the table
    // You can use a service or make an HTTP request to check the credentials
    // Return true if the user exists and the entered data is valid, otherwise return false
    return true;
  }
}
