
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  services = [
    {
      image: 'assets/et_1.jpg',
      title: 'Serviço 1',
      description: 'Descrição breve do serviço 1 oferecido pela empresa.'
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

}
