import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public role= [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user'}
  ]
  constructor(private formBuilder:FormBuilder, private toastr: ToastrService, private authService: AuthService, private router: Router) {

  }
  registerForm = this.formBuilder.group({
    id:this.formBuilder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.formBuilder.control('',Validators.required), 
    password: this.formBuilder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
    role:this.formBuilder.control(''),
    gen: this.formBuilder.control(''),
    isActive: this.formBuilder.control(false)
  })

  processedResgiter() {
    debugger
    if(this.registerForm.valid) {
      this.authService.proccedregister(this.registerForm.value).subscribe(res => {
        if(res) {
          debugger
        this.toastr.success( 'Registered Successfully');
        this.router.navigateByUrl('login');
        }
      })
    } else {
      this.toastr.warning('Please enter Valid Data');
    }
  }

  get f() {
    return this.registerForm.controls;
  }
  public isRoleSelected() {
    return this.f.role;
  }
  public gotologin() {
    this.router.navigateByUrl('login');
  }

  public selectedRole(event: any) {
    this.f.role.setValue =  event.value 
  }
}
