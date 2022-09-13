import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }
  onLogin(){
    this.auth.login(this.form.getRawValue()).subscribe((res: any) => {
      if (res) {
        AuthInterceptor.accessToken=res.authenticationToken;
        console.log(res);
        this.router.navigate(['/'])
      }
    });
  }
}
