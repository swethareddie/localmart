// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   title = 'Registration Page';
//   username = new FormControl('', [Validators.required, Validators.minLength(5)]);
//   email = new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z0-9.@]+$')]);
//   password = new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern('^[a-zA-Z0-9]+$')]);
  
//   gender = new FormControl('', Validators.required);
//   userType = new FormControl('', Validators.required);
//   phoneNumber = new FormControl('', Validators.required);
//   address = new FormControl('', Validators.required);

//   registrationForm: FormGroup;

//   constructor(private router: Router, private http: HttpClient, private builder: FormBuilder) {
//     this.registrationForm = this.builder.group({
//       username: ['', [Validators.required, Validators.minLength(5)]],
//       email: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z0-9.@]+$')]],
//       password: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]+$')]],
      
//       gender: ['', Validators.required],
//       userType: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//       address: ['', Validators.required]
//     });
//   }

//   save() {
//     if (this.registrationForm.valid) {
//       let bodyData = {
//         "username": this.registrationForm.value.username,
//         "email": this.registrationForm.value.email,
//         "password": this.registrationForm.value.password,
//         "userType": this.registrationForm.value.userType,
//         "gender": this.registrationForm.value.gender,
//         "phoneNumber": this.registrationForm.value.phoneNumber,
//         "address": this.registrationForm.value.address
//       };

//       this.http.post("http://localhost:8080/localmart/users/register", bodyData, { responseType: 'text' })
//         .subscribe((resultData: any) => {
//           console.log(resultData);
//           alert("User Registered Successfully");
//         });
//     } else {
//       alert("Please fill in all required fields.");
//     }
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  username: string ="";
  email: string ="";
  password: string ="";
  userType: string = "";
  gender: string = "";
  phoneNumber: string = "";
  address: string = "";

  constructor(private router: Router,private http: HttpClient) {}

  save() {
    // Check if form is valid before proceeding with HTTP POST request
    if (this.isValidForm()) {
      let bodyData = {
        "username" : this.username,
        "email" : this.email,
        "password" : this.password,
        "userType": this.userType,
        "gender": this.gender,
        "phoneNumber": this.phoneNumber,
        "address": this.address
      };

      this.http.post("http://localhost:8080/localmart/users/register", bodyData, {responseType: 'text'})
        .subscribe((resultData: any) => {
          console.log(resultData);
          alert("User Registered Successfully");
        });
    }
  }

  isValidForm(): boolean {
    // Perform form validation here
    if (!this.username || !this.email || !this.password || !this.userType || !this.gender || !this.phoneNumber || !this.address) {
      alert("Please fill in all required fields.");
      return false;
    }

    // You can add more specific validation rules here if needed

    return true;
  }
}




