import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user-service/userservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  
  resetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService :UserserviceService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.resetForm.valid){
    console.log('valid', this.resetForm.value)
    let reqData = {
      resetPassword : this.resetForm.value.password,
      confirmPassword: this.resetForm.value.confirmPassword
    }
    this.userService.reset(reqData).subscribe((response : any) =>{
      console.log(response);
    })
    }
  }
}
