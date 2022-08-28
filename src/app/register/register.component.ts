import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Register } from '../models/register.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 regData:Register=new  Register();
  constructor(private http:HttpClient,private formBuilder:FormBuilder,private auth:AuthService) { }
form!:FormGroup
  ngOnInit(): void {
this.form=this.formBuilder.group({
  name:'',
  email:'',
  password:''
})
  }
  onRegister(){
    this.auth.register(this.form.getRawValue()).subscribe((res:any)=>{
      if(res){
        console.log(res);
      }
    });
}
}
