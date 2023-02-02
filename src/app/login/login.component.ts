import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userData: any;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private authService: AuthService, private router: Router) {
    this.authService.logout();
  }
  loginForm = this.formBuilder.group({
    username: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required)
  })
  processedologin() {
    if (this.loginForm.valid) {
      //   this.authService.proccedregister(this.loginForm.value).subscribe(res => {
      //     this.toastr.success('Please contact admin for enable access', 'Registered Successfully');
      //     this.router.navigateByUrl('login');
      //   })
      //   return;
      // } else {
      //   this.toastr.warning('Please enter Valid Data');
      this.authService.getByCode(this.loginForm.value.username).subscribe(res => {
        this.userData = res;
        if (this.userData.password === this.loginForm.value.password &&this.userData.id === this.loginForm.value.username) {
            this.authService.isUserLogin =  true;
            this.authService.userInfo = res;
            this.authService.setRoleLocalStorage(this.userData.role);
            localStorage.setItem('userData', JSON.stringify(this.userData));
            this.toastr.success('Login Successfully');
            this.router.navigateByUrl('');
        } else {
          this.toastr.error("Invalid credentails")
        }
        console.log('userData', this.userData, 'res', res)
      }, error => {
        this.toastr.error("Invalid credentails")
      })
    }
  }

  gotoSignUp() {
    this.router.navigateByUrl('register');
  }
}
