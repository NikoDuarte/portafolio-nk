import { Component, OnInit } from '@angular/core';
import * as aos from 'aos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public frases_saludo: string[]

  public descripcion: {inicial: string, agil: string, final: string}

  constructor() {
    this.frases_saludo = [ 'Hola!', 'Soy Nicolas Duarte', 'Full stack developer en JS' ]
    this.descripcion = {
      inicial: `Como desarrollador web Full Stack en JavaScript, mi rol sería diseñar, desarrollar y mantener aplicaciones web utilizando las tecnologías más avanzadas de JavaScript en el lado del cliente y del servidor. Como programador apasionado desde los 16 años, tengo una amplia experiencia en el desarrollo de aplicaciones web y una profunda comprensión de los conceptos fundamentales de la programación.`,
      agil: `Soy un apasionado por aprender nuevas tecnologías y metodologías de desarrollo, y me aseguro de estar al tanto de las últimas tendencias en el mercado. Soy capaz de trabajar en equipo y de forma autónoma, y siempre me esfuerzo por superar las expectativas y entregar un trabajo de alta calidad.`,
      final: `Si estás buscando un desarrollador web Full Stack en JavaScript con una sólida formación y experiencia en diferentes tecnologías y frameworks, no dudes en contactarme. Estoy seguro de que puedo ayudarte a llevar tu proyecto al siguiente nivel.`
    }
  }

  ngOnInit(): void {
    aos.init()
    window.addEventListener('load', aos.refresh)
  }

}
