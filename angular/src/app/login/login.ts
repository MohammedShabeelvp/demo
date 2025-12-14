import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  imports: [MatInputModule,MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
