import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias = [
    //? CATEGORIAS: interfaz, jugabilidad, npc, diseño, general
    {
      titulo: 'SHH!! escucha.',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '22/04/2022',
      cat: 'diseño',
    },
    {
      titulo: '¡No se me olvida!',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '05/05/2022',
      cat: 'jugabilidad',
    },
    {
      titulo: 'Un sitio donde vivir en paz',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '05/05/2022',
      cat: 'diseño',
    },
    {
      titulo: '¡Vaya interiores!',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '19/04/2022',
      cat: 'diseño',
    },
    {
      titulo: 'Un poco de curacion, que alivio.',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '10/04/2022',
      cat: 'jugabilidad',
    },
    {
      titulo: '¿vamos de compras?',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '10/04/2022',
      cat: 'jugabilidad',
    },
    {
      titulo: '¡Me lo guardo!',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '07/04/2022',
      cat: 'interfaz',
    },
    {
      titulo: '¿Hablamos un rato?',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '07/04/2022',
      cat: 'interfaz',
    },
    {
      titulo: '¡Menu!',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '04/04/2022',
      cat: 'interfaz',
    },
    {
      titulo: '¡Ya cayo la noche!',
      parrafo: '',
      src: '../../../assets/tavern.png',
      fecha: '03/04/2022',
      cat: 'diseño',
    }, //!--------------------------------------
    {
      titulo: '¡Hogar dulce hogar!',
      parrafo: 'Ya hemos empezado con el diseño de los establecimientos.',
      src: '../../../assets/tavern.png',
      fecha: '28/03/2022',
      cat: 'diseño',
    },
    {
      titulo: '¡Estoy vivo!',
      parrafo:
        'Es importante saber si estas a punto de morir o no, o cuanta experiencia te falta para subir de nivel, para ello se han incluido indicadores de vida y de experiencia.',
      src: '../../../assets/vidayexp.png',
      fecha: '25/03/2022',
      cat: 'interfaz',
    },
    {
      titulo: '¡Al ataque!',
      parrafo:
        'Despues de que unos enemigos llegasen a nuestro juego, teniamos que dar la posibilidad de luchar contra ellos, hemos añadido y estamos trabajando en el ataque tanto de cerca como a distancia, tambien hemos hecho que los enemigos que mates te suelte experiencia para poder subir de nivel.',
      src: '../../../assets/ataqueExp.gif',
      fecha: '20/03/2022',
      cat: 'jugabilidad',
    },
    {
      titulo: '¡Mirame me muevo!',
      parrafo:
        'Queriamos dar un toque de vida a los seres vivos de este mundo, pues eso hemos hecho dandoles animaciones ¡mira como se mueven estando quietos!',
      src: '../../../assets/idle.gif',
      fecha: '19/03/2022',
      cat: 'npc',
    },
    {
      titulo: '¡A cubierto nos atacan!',
      parrafo:
        'Se ha empezado a trabajan en el diseño y funcionamiento de los enemigos.',
      src: '../../../assets/enemigos.png',
      fecha: '17/03/2022',
      cat: 'npc',
    },
    {
      titulo: '¡Ya estamos trabajando en el mapa!',
      parrafo:
        'Necesitamos un terreno en el que andar, en el que vivir, que mirar, un mapa lo es todo en un juego.',
      src: '../../../assets/mapa.png',
      fecha: '08/03/2022',
      cat: 'diseño',
    },
    {
      titulo: '¡Ya tenemos personaje!',
      parrafo:
        'Ya se ha creado el peronaje principal, vamos avanzando poco a poco.',
      src: '../../../assets/pj.png',
      fecha: '03/03/2022',
      cat: 'npc',
    },
    {
      titulo: '¡Una nueva aventura!',
      parrafo:
        'Este es el inicio de un nuevo proyecto, ¡vamos a crear un nuevo juego rpg!',
      src: '../../../assets/logoRazorSinNegro.png',
      fecha: '25/02/2022',
      cat: 'general',
    },
  ];

  noticiasMostrar = this.noticias;

  filtrosSeleccionados: string[] = [];

  //? CATEGORIAS: interfaz, jugabilidad, npc, diseño, general
  filtrarNoticias() {
    const interfaz = document.getElementById(
      'btncheck1'
    ) as HTMLInputElement | null;
    const jugabilidad = document.getElementById(
      'btncheck2'
    ) as HTMLInputElement | null;
    const npc = document.getElementById('btncheck3') as HTMLInputElement | null;
    const diseño = document.getElementById(
      'btncheck4'
    ) as HTMLInputElement | null;
    const general = document.getElementById(
      'btncheck5'
    ) as HTMLInputElement | null;

    this.filtrosSeleccionados = [];

    let i = 0;

    if (interfaz?.checked) this.filtrosSeleccionados.push('interfaz');
    else i++;
    if (jugabilidad?.checked) this.filtrosSeleccionados.push('jugabilidad');
    else i++;
    if (npc?.checked) this.filtrosSeleccionados.push('npc');
    else i++;
    if (diseño?.checked) this.filtrosSeleccionados.push('diseño');
    else i++;
    if (general?.checked) this.filtrosSeleccionados.push('general');
    else i++;

    if (i < 5) {
      let obj = [];

      for (let i = 0; i < this.filtrosSeleccionados.length; i++) {
        for (let j = 0; j < this.noticias.length; j++) {
          if (this.noticias[j].cat === this.filtrosSeleccionados[i])
            obj.push(this.noticias[j]);
        }
      }

      this.noticiasMostrar = obj;
    } else {
      this.noticiasMostrar = this.noticias;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
