
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  services = [
    {
      image: 'assets/et_1.jpg',
      title: 'Clientes',
      description: 'Lista de clientes',
      router: 'client'
    },
    {
      image: 'assets/et_2.jpg',
      title: 'Serviço 2',
      description: 'Descrição breve do serviço 2 oferecido pela empresa.'
    },
    {
      image: 'assets/et_3.jpg',
      title: 'Serviço 3',
      description: 'Descrição breve do serviço 3 oferecido pela empresa.'
    },
    {
      image: 'assets/et_4.jpg',
      title: 'Serviço 4',
      description: 'Descrição breve do serviço 4 oferecido pela empresa.'
    }
  ];
service: any;

}
