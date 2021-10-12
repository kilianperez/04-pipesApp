import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Kilian';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitalo',
    femenino: 'invitarla',
  };

  // i18nSPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan','Eduardo', 'Fernando', 'Raquel'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };
  cambiarCliente(){
    this.nombre = 'Maria';
    this.genero = 'femenino'
  }
  borrarCliente(){
    // this.clientes.shift(); // borra el primero
    this.clientes.pop(); // borra el último
  }
}
