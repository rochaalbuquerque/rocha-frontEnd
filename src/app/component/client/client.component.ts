import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})

export class ClientComponent {

  clientForm: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.clientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      cpfOuCnpj: [''],
    });
  }

  ngOnInit(): void {
    // Recarregar dados ou estado do componente, se necessário
  }

  submitClient() {
    const clientData = this.clientForm.value;

    this.http.post('http://localhost:8080/clients', clientData)
      .subscribe({
        next: (response) => {
          console.log('Client saved successfully', response);
        },
        error: (error) => {
          console.error('Error saving client', error);
        },
        complete: () => {
          console.log('Request complete');

          this.successMessage = 'Client saved successfully!';
          setTimeout(() => {
            this.successMessage = null; // Limpa a mensagem após alguns segundos
          }, 3000); // Tempo em milissegundos (3 segundos)
          this.clientForm.reset();

        }
      });
  }

}

