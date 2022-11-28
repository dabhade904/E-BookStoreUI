import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/user-service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide=true;
  login !: FormGroup;
  submitted = false;
  user = '1'
  constructor(private formBuilder: FormBuilder, private userService: UserserviceService, private router: Router) { }
  ngOnInit() {
    localStorage.setItem('SeesionUser', this.user)
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }
  onSubmit() {
    this.submitted = true;
    if (this.login.valid) {
      console.log("do api call");
      let data = {
        email: this.login.value.email,
        password: this.login.value.password
      }
      this.userService.login(data).subscribe((Response: any) => {
        console.log('responce :=>',Response);
        localStorage.setItem('tokan', Response.tokan)
      })
    } else {
      console.log("Invalid data", this.login.value);
      console.log("no api call");
    }
    this.router.navigateByUrl('/home')  
  }
}
