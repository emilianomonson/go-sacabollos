import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; 
import * as AOS from 'aos';

// Importaciones de los componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { FaqComponent } from './components/faq/faq.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServiciosComponent,
    TrabajosComponent,
    InstagramComponent,
    FaqComponent,
    PresupuestoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  title = 'go-sacabollos';

  // Inyectamos el identificador de plataforma para evitar errores con SSR (Server-Side Rendering)
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verificamos que el código se esté ejecutando en el navegador del cliente antes de iniciar AOS
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800, // Duración de la animación en ms
        once: true,    // La animación ocurre solo la primera vez que se hace scroll
        offset: 100    // Píxeles de distancia antes de que se dispare la animación
      });
    }
  }
}