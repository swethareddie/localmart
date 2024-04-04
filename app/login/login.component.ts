// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   title = 'Login';

//   constructor(private http: HttpClient) {}

//   onSubmit(formData: NgForm): void {
//     if (formData.valid) {
//       const loginData = {
//         email: formData.value.email,
//         password: formData.value.password
//       };

//       this.http.post<any>('http://localhost:8080/localmart/users/login', loginData)
//         .subscribe((response) => {
//           console.log('Login successful:', response);
//           // Handle login success
//           alert('Login successful');
//         }, (error) => {
//           console.error('Error occurred during login:', error);
//           // Handle login error
//           alert('Login failed. Please check your credentials.');
//         });
//     }
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  email: string ="";
  password: string ="";


  constructor(private router: Router,private http: HttpClient) {}
 


  Login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post("http://localhost:8080/localmart/users/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }

      });
    }

}