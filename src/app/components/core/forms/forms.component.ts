import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatAutocompleteModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  petRegisterForm!: FormGroup;

  checked = true;
  
  constructor(private _router: Router, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.petRegisterForm = this.formBuilder.group({
      petName: ['', Validators.required],
      species: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      weight: ['', [Validators.required, Validators.min(0)]],
      birthDate: ['', Validators.required],
      microchip: ['', Validators.required],
      notes: ['']
    });
  }
  onBack(): void {
    this._router.navigate(['/flexy/home']);
  }
  onSubmit(): void {
    if (this.petRegisterForm.valid) {
      const { petName, species, breed, age, color, weight, birthDate, microchip, notes } = this.petRegisterForm.value;
      console.log('Formulario de registro de mascotas enviado');
      console.log('Nombre de la Mascota:', petName);
      console.log('Especie:', species);
      console.log('Raza:', breed);
      console.log('Edad:', age);
      console.log('Color:', color);
      console.log('Peso:', weight);
      console.log('Fecha de Nacimiento:', birthDate);
      console.log('Microchip:', microchip);
      console.log('Notas:', notes);

      this.snackBar.open('Registro de mascota enviado con éxito', 'Cerrar', {
        duration: 3000,
        panelClass: ['custom-snackbar']
      });
      this.petRegisterForm.reset();
    } else {
      this.snackBar.open('Por favor, complete todos los campos', 'Cerrar', {
        duration: 3000,
        panelClass: ['custom-snackbar-error']
      });
    }
  }
}