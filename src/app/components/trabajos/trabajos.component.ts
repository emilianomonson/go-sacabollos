import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngFor y [class]

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trabajos.component.html',
  styleUrl: './trabajos.component.scss'
})
export class TrabajosComponent {
  // Centralizamos los datos. Si a futuro conectas una base de datos, los cargas directo aquí.
  trabajos = [
    {
      antes: '/antes1.png',
      despues: '/despues1.png',
      titulo: 'Impacto en Puerta Lateral',
      desc: 'Restauración de línea de diseño sin afectar la laca original.',
      activo: false // Estado para controlar el toque en celulares
    },
    {
      antes: '/antes2.png',
      despues: '/despues2.png',
      titulo: 'Daño en parante',
      desc: 'Nivelación milimétrica mediante tracción en frío.',
      activo: false
    },
    {
      antes: '/antes3.png',
      despues: '/despues3.png',
      titulo: 'Abolladura en Guardabarros',
      desc: 'Desabollado con varillas de precisión estructural.',
      activo: false
    }
  ];

  // Función que se ejecuta al tocar la tarjeta en el celular
  toggleResultado(trabajo: any): void {
    trabajo.activo = !trabajo.activo;
  }
}