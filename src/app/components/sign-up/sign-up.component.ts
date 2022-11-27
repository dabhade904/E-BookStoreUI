import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user-service/userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide=true;
  registerForm!: FormGroup;
  submitted = false;
  public showPassword: boolean = false;
  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNumber: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log("do api call");
      let data = {
        fullName: this.registerForm.value.fullName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        mobileNumber: this.registerForm.value.mobileNumber
      }
      this.user.SignUp(data).subscribe((Response: any) => {
        console.log(Response);
      })
    //  this.resetForm();
    }
    else {
      console.log("invalid data", this.registerForm.value);
     
    }
  }

}
