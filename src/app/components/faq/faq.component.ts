import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  
  faqs = [
    {
      pregunta: '¿El proceso de desabollado afecta la pintura original?',
      respuesta: 'En absoluto. Utilizamos técnicas de tracción en frío y varillaje de precisión milimétrica que conservan la laca y la pintura original de fábrica sin alteraciones.',
      abierta: false
    },
    {
      pregunta: '¿Cuánto tiempo requiere una reparación promedio?',
      respuesta: 'Los golpes de estacionamiento o microbollos se resuelven habitualmente en el transcurso del día. Los daños estructurales más extensos, como el impacto por granizo severo, requieren un análisis previo y pueden tomar entre 48 y 72 horas.',
      abierta: false
    },
    {
      pregunta: '¿El sistema aplica para choques donde se desprendió la pintura?',
      respuesta: 'Nuestro servicio de sacabollos está enfocado en la restitución de la chapa cuando la pintura no ha sufrido fracturas. Si el daño compromete la laca, será necesario un esquema tradicional de chapa y repintado.',
      abierta: false
    },
    {
      pregunta: '¿Tienen garantía los trabajos realizados?',
      respuesta: 'Sí. Garantizamos la nivelación estructural de la carrocería y un acabado completamente libre de imperfecciones visuales.',
      abierta: false
    }
  ];

  // Alterna el estado de apertura de una pregunta y cierra las demás opcionalmente
  toggleFaq(index: number): void {
    this.faqs[index].abierta = !this.faqs[index].abierta;
  }
}