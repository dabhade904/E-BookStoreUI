import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user-service/userservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = false;
    if (this.forgetPasswordForm.valid) {
      console.log("Do Api Call")
      let data = {
        email: this.forgetPasswordForm.value.email
      }
      this.user.forgetPassword(data).subscribe((Response: any) => {
        console.log(Response);
      })
     // this.resetForm();
    } else {
      console.log("No Api Call")
    }
  }
}
