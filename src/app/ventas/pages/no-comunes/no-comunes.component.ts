import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Kilian';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitalo',
    'femenino': 'invitarla'
  }
}
