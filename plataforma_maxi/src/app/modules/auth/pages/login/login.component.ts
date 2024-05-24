import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  newForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private service : AuthService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  verifyAuth(): void {
    const dataUser = {
      username:this.newForm.get('username')?.value,
      password:this.newForm.get('password')?.value
    }
    this.service.login(dataUser.username,dataUser.password).subscribe({
      next:(response)=>{
        this.service.setToken(response.token);
        this.router.navigate(['/app']);
      }
    })

  }
}
