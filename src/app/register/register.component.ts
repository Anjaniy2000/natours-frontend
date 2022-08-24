import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 regData:Register=new  Register();
  constructor(private reg:AuthService) { }

  ngOnInit(): void {

  }
  registerCustomer(){
    this.reg.register(this.regData);
}

saveName(data:any){
  this.regData.name=data;
}
saveEmail(data:any){
  this.regData.email=data;
}
savePassword(data:any){
  this.regData.password=data;
}
}
