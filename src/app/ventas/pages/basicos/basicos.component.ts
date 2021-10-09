import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'kilian';
  nombreUpper: string = 'KILIAN';
  nombreCompleto: string = 'kILiAn pÉreZ'
}
