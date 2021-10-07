import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'kilian pérez';
  valor: number =  10000000;
  objeto: object = {
    nombre: 'Kilian',
    apellido: 'Perez'
  }
  mostrarNombre(){
    console.log(this.nombre);
    
  }
}
