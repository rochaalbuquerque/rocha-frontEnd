import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';

interface Client {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgxPaginationModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  allClients: Client[] = [];
  itemsPerPage: number = 5;
  totalItems: number = 0;
  p: number = 1; // Página atual
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
    this.loadClients(); // Carregar todos os clientes ao iniciar
  }

  loadClients(): void {
    this.getClients().subscribe({
      next: (data) => {
        this.allClients = data;
        this.totalItems = this.allClients.length; // Define o número total de itens
      },
      error: (error) => {
        console.error('Error loading clients', error);
      }
    });
  }

  getClients(): Observable<Client[]> {
    // Endpoint sem paginação
    return this.http.get<Client[]>('http://localhost:8080/clients');
  }

  onPageChange(page: number): void {
    this.p = page; // Atualiza a página atual
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  editClient(client: Client): void {
    // Lógica para editar o cliente
    console.log('Edit client:', client);
  }

  deleteClient(clientId: number): void {
    this.http.delete(`http://localhost:8080/clients/${clientId}`).subscribe({
      next: () => {
        console.log('Client deleted successfully');
        // Atualize a lista de clientes após a exclusão
        this.loadClients();
      },
      error: (error) => {
        console.error('Error deleting client', error);
      }
    });
  }

  submitClient(): void {
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
          this.loadClients(); // Atualiza a lista de clientes após a inclusão
        }
      });
  }
}
