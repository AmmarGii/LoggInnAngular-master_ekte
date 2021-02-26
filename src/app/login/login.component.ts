import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CheckuserService } from '../checkuser.service';
import { user } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = this.li.group({
  brukernavn: ['',Validators.required],
  passord : ['',Validators.required],
})

  form: any;

  constructor(private li : FormBuilder, private se: CheckuserService) { }

  ngOnInit(): void {
  }
sjekk(){
  if(this.login.valid){
    this.sjekkgreier(this.login.value.brukernavn,this.login.value.passord); 
  }else{
    this.login.markAllAsTouched();
    }
  }

  innBruker(){ 
     if(!this.login.controls.brukernavn.valid && this.login.controls.brukernavn.touched){
        return true;
     }
     return false;
  }
  innpassord(){
    
    if(!this.login.controls.passord.valid && this.login.controls.passord.touched){
       return true;
    }
    return false;
 }

  sjekkgreier(brukr: string,pass: string){
     
      const p = new user();
      p.brukernavn = brukr;
      p.passord = pass;

     (this.se.post(p))
  }
  
}