import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: LoginService, private snackBar: MatSnackBar) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Formulario enviado');
      console.log('Username:', username);
      console.log('Password:', password);

      this.snackBar.open('Login enviado con éxito', 'Cerrar', {
        duration: 3000,
        panelClass: ['custom-snackbar']
      });
      this.loginForm.reset();
    } else {
      this.snackBar.open('Por favor, complete todos los campos', 'Cerrar', {
        duration: 3000,
        panelClass: ['custom-snackbar-error']
      });
    }
  }
}