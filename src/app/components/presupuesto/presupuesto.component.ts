import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para leer los inputs del formulario

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [FormsModule], // Lo agregamos aquí
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.scss'
})
export class PresupuestoComponent {
  
  // Objeto para guardar los datos del formulario
  datos = {
    nombre: '',
    telefono: '',
    vehiculo: '',
    servicio: '',
    detalles: ''
  };

  enviarWhatsApp() {
    // Número del cliente (Código de país + número, sin el signo '+'. Ej: 5491123456789)
    const numeroWhatsApp = '549XXXXXXXXX'; 

    // Armamos el mensaje con formato (los asteriscos hacen que el texto se vea en negrita en WhatsApp)
    const mensaje = `Hola GO SACABOLLOS, quiero solicitar un presupuesto:
    
*Nombre:* ${this.datos.nombre}
*Teléfono:* ${this.datos.telefono}
*Vehículo:* ${this.datos.vehiculo}
*Servicio:* ${this.datos.servicio}
*Detalles del daño:* ${this.datos.detalles}

*Nota:* A continuación les envío las fotos del daño para que puedan evaluarlo.`;

    // Codificamos el texto para que la URL sea válida (reemplaza espacios y saltos de línea)
    const url = `https://wa.me/${5493571529100}?text=${encodeURIComponent(mensaje)}`;

    // Abrimos WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  }
}