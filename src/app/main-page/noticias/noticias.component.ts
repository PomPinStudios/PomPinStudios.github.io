import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias = [
    //? CATEGORIAS: Interfaz, Jugabilidad, NPC, Diseño, Desarrollo
    {
      titulo: 'SHH!! escucha.',
      parrafo: '¿Aquien no le gusta tener musica de fondo o escuchar increibles efectos al realizar una accion? estamos trabajando en la seccion de sonido del juego para darle mas vida y presencia a cada accion.',
      src: '../../../assets/tavern.png',
      fecha: '22/04/2022',
      cat: 'Diseño',
      color: 'border-success'
    },
    {
      titulo: '¡No se me olvida!',
      parrafo: 'No queremos que cada vez que entres al juego tengas que empezar la historia de nuevo, para ello hemos creado una opcion de guardar partida y cargar partida.',
      src: '../../../assets/tavern.png',
      fecha: '05/05/2022',
      cat: 'Jugabilidad',
      color: 'border-danger'
    },
    {
      titulo: 'Un sitio donde vivir en paz',
      parrafo: 'Necesitabamos un sitio principal donde transcurra la historia, ese sitio sera el pueblo principal de Razor.',
      src: '../../../assets/tavern.png',
      fecha: '05/05/2022',
      cat: 'Diseño',
      color: 'border-success'
    },
    {
      titulo: '¡Vaya interiores!',
      parrafo: 'Hace tiempo empezamos con diseños de los edificios, ahora toca darles el toque acogedor, hemos diseñado el interior de varias casas y tiendas.',
      src: '../../../assets/tavern.png',
      fecha: '19/04/2022',
      cat: 'Diseño',
      color: 'border-success'
    },
    {
      titulo: 'Un poco de curacion, que alivio.',
      parrafo: 'Pero... ¿si me bajan la vida que hago?, hemos añadido las pociones, si te falta vida, ahora podras curarte.',
      src: '../../../assets/tavern.png',
      fecha: '10/04/2022',
      cat: 'Jugabilidad',
      color: 'border-danger'
    },
    {
      titulo: '¿vamos de compras?',
      parrafo: 'Ya hemos dearrollado la mecanica de comercio, con la que podras comprar y vender objetos con los que poder interactura.',
      src: '../../../assets/tavern.png',
      fecha: '10/04/2022',
      cat: 'Jugabilidad',
      color: 'border-danger'
    },
    {
      titulo: '¡Me lo guardo!',
      parrafo: 'Conseguimos objetos, como por ejemplo madera, ¿pero eso donde va? se ha desarrollado un menu de inventario, para poder gestionar las bienes.',
      src: '../../../assets/tavern.png',
      fecha: '07/04/2022',
      cat: 'Interfaz',
      color: 'border-primary'
    },
    {
      titulo: '¿Hablamos un rato?',
      parrafo: 'A quien no le gusta una buena historia? la forma en la que te sumergiras en este viaje sera tambien gracias a porder hablar con los pueblerino o leer cartas y carteles, para ello hemos desarrollado el sistema de dialogo.',
      src: '../../../assets/tavern.png',
      fecha: '07/04/2022',
      cat: 'Interfaz',
      color: 'border-primary'
    },
    {
      titulo: '¡Menu!',
      parrafo: 'Ahora puedes navegar por otras opciones gracias al menu que hemos agregado.',
      src: '../../../assets/tavern.png',
      fecha: '04/04/2022',
      cat: 'Interfaz',
      color: 'border-primary'
    },
    {
      titulo: '¡Ya cayo la noche!',
      parrafo: 'Como pasa el tiempo... ya hemos desarrollado el cambio entre noche y dia, junto a un reloj que te marcara la hora actual.',
      src: '../../../assets/tavern.png',
      fecha: '03/04/2022',
      cat: 'Diseño',
      color: 'border-success'
    }, //!--------------------------------------
    {
      titulo: '¡Hogar dulce hogar!',
      parrafo: 'Ya hemos empezado con el diseño de los establecimientos.',
      src: '../../../assets/tavern.png',
      fecha: '28/03/2022',
      cat: 'Diseño',
      color: 'border-success'
    },
    {
      titulo: '¡Estoy vivo!',
      parrafo:
        'Es importante saber si estas a punto de morir o no, o cuanta experiencia te falta para subir de nivel, para ello se han incluido indicadores de vida y de experiencia.',
      src: '../../../assets/vidayexp.png',
      fecha: '25/03/2022',
      cat: 'Interfaz',
      color: 'border-primary'
    },
    {
      titulo: '¡Al ataque!',
      parrafo:
        'Despues de que unos enemigos llegasen a nuestro juego, teniamos que dar la posibilidad de luchar contra ellos, hemos añadido y estamos trabajando en el ataque tanto de cerca como a distancia, tambien hemos hecho que los enemigos que mates te suelte experiencia para poder subir de nivel.',
      src: '../../../assets/ataqueExp.gif',
      fecha: '20/03/2022',
      cat: 'Jugabilidad',
      color: 'border-danger'
    },
    {
      titulo: '¡Mirame me muevo!',
      parrafo:
        'Queriamos dar un toque de vida a los seres vivos de este mundo, pues eso hemos hecho dandoles animaciones ¡mira como se mueven estando quietos!',
      src: '../../../assets/idle.gif',
      fecha: '19/03/2022',
      cat: 'NPC',
      color: 'border-warning'
    },
    {
      titulo: '¡A cubierto nos atacan!',
      parrafo:
        'Se ha empezado a trabajan en el diseño y funcionamiento de los enemigos.',
      src: '../../../assets/enemigos.png',
      fecha: '17/03/2022',
      cat: 'NPC',
      color: 'border-warning'
    },
    {
      titulo: '¡Ya estamos trabajando en el mapa!',
      parrafo:
        'Necesitamos un terreno en el que andar, en el que vivir, que mirar, un mapa lo es todo en un juego.',
      src: '../../../assets/mapa.png',
      fecha: '08/03/2022',
      cat: 'Diseño',
      color: 'border-success'
    },
    {
      titulo: '¡Ya tenemos personaje!',
      parrafo:
        'Ya se ha creado el peronaje principal, vamos avanzando poco a poco.',
      src: '../../../assets/pj.png',
      fecha: '03/03/2022',
      cat: 'NPC',
      color: 'border-warning'
    },
    {
      titulo: '¡Todo vuesto!',
      parrafo:
        'Podreis consultar nuestra cuenta de GitHub, donde estaremos guardando todo el contenido del proyecto.',
      src: '../../../assets/GitHub.png',
      fecha: '25/02/2022',
      cat: 'Desarrollo',
      color: 'border-info'
    },
    {
      titulo: '¡Nuevo canal de YouTube!',
      parrafo:
        'Hemos creado un canal de YouTube en el que podreis ir viendo como se va desarrollando el juego.',
      src: '../../../assets/youtube.png',
      fecha: '25/02/2022',
      cat: 'Desarrollo',
      color: 'border-info'
    },
    {
      titulo: '¡Una nueva aventura!',
      parrafo:
        'Este es el inicio de un nuevo proyecto, ¡vamos a crear un nuevo juego rpg!',
      src: '../../../assets/logoRazorSinNegro.png',
      fecha: '25/02/2022',
      cat: 'Desarrollo',
      color: 'border-info'
    },
  ];

  noticiasMostrar = this.noticias;

  filtrosSeleccionados: string[] = [];

  //? CATEGORIAS: interfaz, jugabilidad, npc, diseño, general
  filtrarNoticias() {
    const interfaz = document.getElementById(
      'Interfaz'
    ) as HTMLInputElement | null;
    const jugabilidad = document.getElementById(
      'Jugabilidad'
    ) as HTMLInputElement | null;
    const npc = document.getElementById('NPC') as HTMLInputElement | null;
    const diseño = document.getElementById(
      'Diseño'
    ) as HTMLInputElement | null;
    const general = document.getElementById(
      'Desarrollo'
    ) as HTMLInputElement | null;

    this.filtrosSeleccionados = [];

    let i = 0;

    if (interfaz?.checked) this.filtrosSeleccionados.push('Interfaz');
    else i++;
    if (jugabilidad?.checked) this.filtrosSeleccionados.push('Jugabilidad');
    else i++;
    if (npc?.checked) this.filtrosSeleccionados.push('NPC');
    else i++;
    if (diseño?.checked) this.filtrosSeleccionados.push('Diseño');
    else i++;
    if (general?.checked) this.filtrosSeleccionados.push('Desarrollo');
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
