import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  // keyValue Pipe
  persona = {
    nombre :'Kilian',
    edad: 29,
    direccion: 'Madrid, España'
  }

  // Json Pipe 

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
        {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'IronMan',
      vuela: true
    },
    {
      nombre: 'Capitán América',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000); // emite valores numericos 0,1,2,3,4,5,6...

 valorPromesa = new Promise((resolve,reject)=>{
   setTimeout(() => {
     resolve('Tenemos data de promesa')
   }, 3500);
 })
}
