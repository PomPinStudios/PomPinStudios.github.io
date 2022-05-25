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
      titulo: 'SHH!!! Escucha',
      parrafo:
        '¿A quien no le gusta tener música de fondo o escuchar increíbles efectos al realizar una acción? Estamos trabajando en la sección de sonido del juego para darle más vida y presencia a cada acción.',
      src: '../../../assets/altavoz.png',
      fecha: '22/04/2022',
      cat: 'Diseño',
      color: 'border-success',
    },
    {
      titulo: '¡No se me olvida!',
      parrafo:
        'No queremos que cada vez que entres al juego tengas que empezar la historia de nuevo, para ello hemos creado una opción de guardar partida y cargar partida.',
      src: '../../../assets/guardar.png',
      fecha: '05/05/2022',
      cat: 'Jugabilidad',
      color: 'border-danger',
    },
    {
      titulo: 'Un sitio donde vivir en paz',
      parrafo:
        'Necesitábamos un sitio principal donde transcurra la historia, ese sitio será el pueblo principal de Razor.',
      src: '../../../assets/pueblo.png',
      fecha: '05/05/2022',
      cat: 'Diseño',
      color: 'border-success',
    },
    {
      titulo: '¡Vaya interiores!',
      parrafo:
        'Hace tiempo empezamos con diseños de los edificios, ahora toca darles el toque acogedor, hemos diseñado el interior de varias casas y tiendas.',
      src: '../../../assets/interior.png',
      fecha: '19/04/2022',
      cat: 'Diseño',
      color: 'border-success',
    },
    {
      titulo: 'Un poco de curación, que alivio.',
      parrafo:
        'Pero... ¿Si me bajan la vida que hago?, hemos añadido las pociones, si te falta vida, ahora podrás curarte.',
      src: '../../../assets/pocionCura.png',
      fecha: '10/04/2022',
      cat: 'Jugabilidad',
      color: 'border-danger',
    },
    {
      titulo: '¿Vamos de compras?',
      parrafo:
        'Ya hemos desarrollado la mecánica de comercio, con la que podrás comprar y vender objetos con los que poder interactuar.',
      src: '../../../assets/tienda.png',
      fecha: '10/04/2022',
      cat: 'Jugabilidad',
      color: 'border-danger',
    },
    {
      titulo: '¡Me lo guardo!',
      parrafo:
        'Conseguimos objetos, como por ejemplo madera, ¿pero eso donde va? Se ha desarrollado un menú de inventario, para poder gestionar los bienes.',
      src: '../../../assets/inventario.png',
      fecha: '07/04/2022',
      cat: 'Interfaz',
      color: 'border-primary',
    },
    {
      titulo: '¿Hablamos un rato?',
      parrafo:
        'A quien no le gusta una buena historia? La forma en la que te sumergirás en este viaje será también gracias a poder hablar con los pueblerinos o leer cartas y carteles, para ello hemos desarrollado el sistema de diálogo.',
      src: '../../../assets/dialogo.gif',
      fecha: '07/04/2022',
      cat: 'Interfaz',
      color: 'border-primary',
    },
    {
      titulo: 'Menú',
      parrafo:
        'Ahora puedes navegar por otras opciones gracias al menú que hemos agregado.',
      src: '../../../assets/menu.png',
      fecha: '04/04/2022',
      cat: 'Interfaz',
      color: 'border-primary',
    },
    {
      titulo: 'Ya cayó la noche',
      parrafo:
        'Como pasa el tiempo... ya hemos desarrollado el cambio entre noche y día, junto a un reloj que te marcara la hora actual.',
      src: '../../../assets/noche.gif',
      fecha: '03/04/2022',
      cat: 'Diseño',
      color: 'border-success',
    },
    {
      titulo: 'Hogar dulce hogar',
      parrafo: 'Ya hemos empezado con el diseño de los establecimientos.',
      src: '../../../assets/tavern.png',
      fecha: '28/03/2022',
      cat: 'Diseño',
      color: 'border-success',
    },
    {
      titulo: '¡Estoy vivo!',
      parrafo:
        'Es importante saber si estás a punto de morir o no, o cuanta experiencia te falta para subir de nivel, para ello se han incluido indicadores de vida y de experiencia.',
      src: '../../../assets/vidayexp.png',
      fecha: '25/03/2022',
      cat: 'Interfaz',
      color: 'border-primary',
    },
    {
      titulo: '¡Al ataque!',
      parrafo:
        'Después de que unos enemigos llegasen a nuestro juego, teníamos que dar la posibilidad de luchar contra ellos, hemos añadido y estamos trabajando en el ataque tanto de cerca como a distancia, también hemos hecho que los enemigos que mates te suelte experiencia para poder subir de nivel.',
      src: '../../../assets/ataqueExp.gif',
      fecha: '20/03/2022',
      cat: 'Jugabilidad',
      color: 'border-danger',
    },
    {
      titulo: '¡Mírame, me muevo!',
      parrafo:
        'Queríamos dar un toque de vida a los seres vivos de este mundo, pues eso hemos hecho dándoles animaciones, ¡mira como se mueven estando quietos!',
      src: '../../../assets/idle.gif',
      fecha: '19/03/2022',
      cat: 'NPC',
      color: 'border-warning',
    },
    {
      titulo: '¡A cubierto nos atacan!',
      parrafo:
        'Se ha empezado a trabajar en el diseño y funcionamiento de los enemigos.',
      src: '../../../assets/enemigos.png',
      fecha: '17/03/2022',
      cat: 'NPC',
      color: 'border-warning',
    },
    {
      titulo: 'Estamos trabajando en el mapa',
      parrafo:
        'Necesitamos un terreno en el que andar, en el que vivir, que mirar, un mapa lo es todo en un juego.',
      src: '../../../assets/mapa.png',
      fecha: '08/03/2022',
      cat: 'Diseño',
      color: 'border-success',
    },
    {
      titulo: 'Ya tenemos personaje',
      parrafo:
        'Ya se ha creado el personaje principal, vamos avanzando poco a poco.',
      src: '../../../assets/pj.png',
      fecha: '03/03/2022',
      cat: 'NPC',
      color: 'border-warning',
    },
    {
      titulo: 'Todo vuestro',
      parrafo:
        'Podréis consultar nuestra cuenta de GitHub, donde estaremos guardando todo el contenido del proyecto.',
      src: '../../../assets/GitHub.png',
      fecha: '25/02/2022',
      cat: 'Desarrollo',
      color: 'border-info',
    },
    {
      titulo: 'Nuevo canal de YouTube',
      parrafo:
        'Hemos creado un canal de YouTube en el que podréis ir viendo como se va desarrollando el juego.',
      src: '../../../assets/youtube.png',
      fecha: '25/02/2022',
      cat: 'Desarrollo',
      color: 'border-info',
    },
    {
      titulo: 'Una nueva aventura',
      parrafo:
        'Este es el inicio de un nuevo proyecto, ¡vamos a crear un nuevo juego RPG!',
      src: '../../../assets/logoRazorSinNegro.png',
      fecha: '25/02/2022',
      cat: 'Desarrollo',
      color: 'border-info',
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
    const diseño = document.getElementById('Diseño') as HTMLInputElement | null;
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
