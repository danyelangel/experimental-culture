(function () {
  'use strict';

  angular
    .module('Slides', [])
    .service('Slides', Slides);

  function Slides() {
    var self = this;
    self.intro = {
      es: 'Una cultura experimental es una cultura sin un norte. Sin una visión clara. La experimentación es útil como herramienta pero cuando ésta se hace la protagonista de una cultura, la visión se puede ir perdiendo. Pero para saber qué es una cultura experimental, hagámonos una pregunta: ¿Qué es la experimentación?',
      en: 'An experimental culture is a culture without a north. Without a clear vision. Experimentation is useful as a tool but when it becomes the protagonist of a culture, the vision of the future will start fading. But to know what is an experimental culture we need to begin by asking ourselves the following question: What is experimentation?'
    };
    self.slides = [
      {
        title: {
          es: '¿Qué es un experimento?',
          en: 'What\'s an experiment?'
        },
        description: {
          es: 'Un experimento es básicamente la comprobación de una hipótesis intentando probar una serie de variables que pueden ser su causa. Por ejemplo el experimento de la prisión de Stanford.',
          en: 'An experiment is basically proving a hypothesis by trying to prove a series of variables which might be the cause. One example can be the Stanford Prison Experiment.'
        },
        layoutAlign: 'center',
        styles: {
          color: '#fff',
          backgroundColor: '#212121',
          textAlign: 'center'
        }
      },
      {
        title: {
          es: 'Prisión de Stanford',
          en: 'The Stanford Prison'
        },
        description: {
          es: 'La prisión de Stanford fue un experimento psicológico para comprobar una hipótesis llamada el Efecto Lucifer que dice que las personas buenas tienden a volverse malas si el entorno en el que se encuentran los incita a comportarse de mala manera.',
          en: 'The Stanford Prison was a psychological experiment to prove a hypothesis named the Lucifer Effect, which says that good people tend to become bad if their environment incites them to have bad behavior.'
        },
        img: {
          src: '/images/slide2.jpg',
          caption: {
            es: 'Tomada de Sean Ness [Creative Commons], vía Flickr',
            en: 'Taken from Sean Ness [Creative Commons], via Flickr'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#4E342E'
        }
      },
      {
        title: {
          es: 'Resultados del experimento',
          en: 'Results of the experiment'
        },
        description: {
          es: 'Después de sólo 6 días, el experimento tuvo que cancelarse porque los guardias se tomaron muy en serio su rol y se volvieron sádicos y violentos, mientras que los reclusos se deprimieron y adquirieron trastornos emocionales.',
          en: 'After just 6 days, the experiment had to be cancelled since the guards became too sadistic after taking their role too seriously, while the interns became depressed and acquired emotional problems.'
        },
        img: {
          src: '/images/slide3.jpg',
          caption: {
            es: 'Imagen tomada del video The Stanford Prison Experiment en Youtube',
            en: 'Image taken from the video The Stanford Prison Experiment in Youtube'
          }
        },
        styles: {
          color: '#424242',
          backgroundColor: '#F5F5F5'
        }
      },
      {
        title: {
          en: 'Das Experiment',
          es: 'Das Experiment'
        },
        description: {
          es: 'Hay una excelente película alemana llamada Das Experiment que recrea este experimento basándose en una novela escrita por Mario Giordano. Esta película es toda una obra de arte. ¿Pero es posible que existan experimentos en el arte?',
          en: 'There is an exellent German movie about this experiment named Das Experiment, which is based on a great novel written by Mario Giordano. This movie is such a piece of art. But, is it possible to have experiments in the arts?'
        },
        img: {
          src: '/images/slide4.jpg',
          caption: {
            es: 'Por Seven Pictures [Copyrighted - Fair Use], vía Wikipedia',
            en: 'By Seven Pictures [Copyrighted - Fair Use], via Wikipedia'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#388E3C'
        }
      },
      {
        title: {
          es: 'Condenado',
          en: 'Condemned'
        },
        description: {
          es: 'En 1975 el artista estadounidense Chris Burden permaneció inmóvil bajo una placa de vidrio por 25 horas. La finalidad de su obra era poner a prueba su audiencia y ver cuánto duraría sin intervenir.',
          en: 'In 1975 the American artist Chris Burden stayed motionless under a glass piece for 25 hours. The purpose of his performance was to test his audience and see how long they would remain without intervening.'
        },
        layoutAlign: 'center',
        background: {
          src: '/images/slide5background.jpg',
          caption: {
            es: 'Chris Burden, Doomed, 1975 © MCA Chicago',
            en: 'Chris Burden, Doomed, 1975 © MCA Chicago'
          }
        },
        styles: {
          textAlign: 'center',
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Resultados del experimento',
          en: 'Results of the experiment'
        },
        description: {
          es: 'La obra terminó cuando un guardia de seguridad puso un vaso de agua junto a él. El experimento de Chris Burden fue su audiencia. Él quiso que el significado de la obra fuera dado por la misma audiencia. El título de la obra fue \'Condenado\'.',
          en: 'The performance ended when a security guard placed a glass of water next to him. Burden\'s experiment was his audience. He wanted the meaning of his art to be given by his audience. The title of his performance was \'Condemned\'.'
        },
        img: {
          src: '/images/slide6.jpg',
          caption: {
            es: 'Chris Burden, Doomed, 1975 © MCA Chicago',
            en: 'Chris Burden, Doomed, 1975 © MCA Chicago'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Experimentar por un cambio',
          en: 'Experiment for a change'
        },
        description: {
          es: 'Pero Chris Burden no es el único que ha experimentado con el arte. Hay muchos ejemplos de artistas contemporáneos que han recurrido a la experimentación para poder abrir las posibilidades de su arte. Artistas que han buscado un cambio.',
          en: 'But Chris Burden isn’t the only one that has experimented with art. There are many examples of contemporary artists that have resorted to experimentation to be able to expand the possibilities of their art. Artists that have looked for change.'
        },
        layoutAlign: 'center',
        background: {
          src: '/images/slide7background.jpg',
          caption: {
            es: 'Por Jeremy Thomas, vía Unsplash',
            en: 'By Jeremy Thomas, via Unsplash'
          }
        },
        styles: {
          textAlign: 'center',
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Las vanguardias',
          en: 'The Avant-gardes'
        },
        description: {
          es: 'En las décadas entre los siglos XIX y XX, se comenzó a insistir en la necesidad de marcar diferencia con los estilos artísticos del pasado. De esta ruptura nacieron las Vanguardias artísticas, las cuales ya no buscaban imitar a la naturaleza sino crear una nueva estética mental basada en la abstracción.',
          en: 'Between the 19th and 20th centuries, many countries insisted in the necessity to make a difference with the traditions and the artistic styles of the past. Upon this rupture came the birth of the famous Artistic Avant-gardes, which were based on creating a new mental aesthetic based on abstraciton.'
        },
        img: {
          src: '/images/slide8.jpg',
          caption: {
            es: 'Evening, Honfleur por Georges Seurat, vía MoMA',
            en: 'Evening, Honfleur by Georges Seurat, via MoMA'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#6A1B9A'
        }
      },
      {
        title: {
          es: 'El cubismo',
          en: 'Cubism'
        },
        description: {
          es: 'Por ejemplo, el pintor cubista Georges Braque buscó usar formas geométricas para crear una nueva estética. Según el crítico estadounidense John Berger, la pintura cubista es un diagrama que resulta de la abstracción de la realidad hacia conceptos más simples.',
          en: 'For example the cubist painter Georges Braque used geometric shapes and colors to generate new aesthetics. According to the American critic John Berger, Cubist painting is a diagram which is the result of the abstraction of reality to simpler concepts.'
        },
        img: {
          src: '/images/slide9.jpg',
          caption: {
            es: 'Man with a Guitar por Georges Braque, vía MoMA',
            en: 'Man with a Guitar by Georges Braque, via MoMA'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#5D4037'
        }
      },
      {
        title: {
          es: 'El surrealismo',
          en: 'Surrealism'
        },
        description: {
          es: 'Pero la abstracción no fue el único método de experimentación con el arte. Artistas surrealistas como Edgar Ende experimentaron con los sueños y el subconsciente para crear nuevas estéticas totalmente diferentes a la realidad palpable.',
          en: 'But abstraction wasn’t the only method of experimentation with art. Surrealists like Edgar Ende experimented with dreams and the subconscious to create new aesthetics which were totally different to the tangible reality.'
        },
        img: {
          src: '/images/slide10.jpg',
          caption: {
            es: 'Der Tänzer auf der Kugel por Edgar Ende, vía Invaluable',
            en: 'Der Tänzer auf der Kugel by Edgar Ende, via Invaluable'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#0277BD'
        }
      },
      {
        title: {
          es: 'Gadsby',
          en: 'Gadsby'
        },
        description: {
          es: 'Esta necesidad de cambio también se manifestó en la literatura. Muchos escritores comenzaron a usar la experimentación y de ahí surgieron textos como Gadsby, del escritor estadounidense Ernest Vincent Wright, una novela escrita totalmente sin usar la letra e.',
          en: 'This need of change was not only manifested in art but also in many other fields, like literature. Many writers began applying this experimentation and as a result of this, there are many texts like Gadbsy, from the american writer Ernest Vincent Wright, a novel written entirely without using the letter e.'
        },
        img: {
          src: '/images/slide11.jpg',
          caption: {
            es: 'Por Wetzel Publishing Co. [Copyrighted - Fair Use], vía Wikipedia',
            en: 'By Wetzel Publishing Co. [Copyrighted - Fair Use], via Wikipedia'
          }
        },
        styles: {
          color: '#3E2723',
          backgroundColor: '#FFE082'
        }
      },
      {
        title: {
          es: 'Un perro andaluz',
          en: 'Un Chien Andalou'
        },
        description: {
          es: 'Un ejemplo del surrealismo en el cine es Un Perro Andaluz. Un cortometraje basado en 2 sueños, un sueño de Salvador Dalí que consistía en hormigas pululando de sus manos y uno de Luis Buñuel consistía en una navaja seccionando el ojo de alguien.',
          en: 'One example of surrealism in cinema is Un Chien Andalou, a 17 minute short-film based on two dreams, one of Salvador Dalí and the other of Luis Buñuel. Dalí’s dream consisted in ants swarming from his hands, and Buñuel’s one consisted in a razor sectioning someone’s eye.'
        },
        img: {
          src: '/images/slide12.jpg',
          caption: {
            es: 'Por Luis Buñuel [Copyrighted - Fair Use], vía Filmoteca Española',
            en: 'By Luis Buñuel [Copyrighted - Fair Use], via Filmoteca Española'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Los problemas de la experimentación',
          en: 'The problems of experimentation'
        },
        description: {
          es: 'Pero aunque esa experimentación puede ampliar increíblemente las posibilidades creativas, también conlleva una problemática ética para el artista que ha sido criticada por algunos autores, entre ellos el escritor alemán Michael Ende.',
          en: 'But although this experimentation can expand incredibly the creative possibilities, it also implies an ethic problematic for the artist which has been criticised by some authors. Michael Ende is one of them.'
        },
        img: {
          src: '/images/slide13.jpg',
          caption: {
            es: 'Los problemas de la experimentación por Daniel Ángel vía danielangel.co',
            en: 'The problems of experimentation by Daniel Ángel via danielangel.co'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#5D4037'
        }
      },
      {
        img: {
          src: '/images/slide15.jpg',
          caption: {
            es: 'Vía Biografías y Vidas.',
            en: 'Via Biografías y Vidas.'
          }
        },
        quote: {
          text: {
            es: '“A mí, esa gente que hace experimentos con el arte y la literatura me parece como si en realidad quisiera decir lo siguiente: “Nosotros no estamos de acuerdo, por supuesto, con lo que hacemos. Con nosotros, personalmente, eso no tiene nada que ver. Con ello no nos comprometemos absolutamente a nada.”',
            en: '“To me, those people who experiment with art and literature seem to me as if they really wanted to say this: “We don’t agree, of course, with what we do. To us, personally, it doesn’t have anything to do. With that we don’t take any responsibility.”'
          },
          author: 'Michael Ende'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Cultura experimental',
          en: 'Experimental Culture'
        },
        description: {
          es: 'Michael Ende dice en su texto Cultura Experimental que al declarar el arte como experimento, los artistas se protegen del rechazo ya que niegan toda responsabilidad sobre su obra. No es mi obra, solo es un experimento. Es bastante irónico. Pero hablando de ironía, ¿Qué es ironía?.',
          en: 'Michael Ende states in his text that when art is declared as an experiment, the artists are protecting themselves from rejection because they deny any responsibility about their piece. It is pretty ironic. But talking about irony, What’s irony?'
        },
        background: {
          src: '/images/slide14background.jpg',
          caption: {
            es: 'Por Samuel Zeller, vía Unsplash.',
            en: 'By Samuel Zeller, via Unsplash.'
          }
        },
        layoutAlign: 'center',
        styles: {
          color: '#fff',
          backgroundColor: '#212121',
          textAlign: 'center'
        }
      },
      {
        title: {
          es: 'Qué es la ironía',
          en: 'What\'s irony?'
        },
        description: {
          es: 'La ironía es expresar algo usando lenguaje que significa lo opuesto, usualmente para dar un tono de humor a lo que se dice. Bastante obvio, ¿No? De hecho no. En una encuesta hecha en Estados Unidos por Patricia Rockwell se llegó a un resultado un tanto irónico.',
          en: 'Irony is expressing something using language that means the opposite, usually to give a touch of humor to what is said. Pretty obvious no? In fact, no. In a survey made in the US by Patricia Rockwell, she came to a conclusion which is certainly ironic.'
        },
        img: {
          src: '/images/slide16.jpg',
          caption: {
            es: 'Vía Hexjam.',
            en: 'Via Hexjam.'
          }
        },
        styles: {
          color: '#000',
          backgroundColor: '#CFD8DC'
        }
      },
      {
        title: {
          es: '“¡Sí, claro!”',
          en: '“Yeah, right!”'
        },
        description: {
          es: 'En la encuesta se preguntaba por un comentario irónico. El 25% no fue capaz de responder la pregunta y el 55% sólo dijo algo chistoso pero no irónico. De hecho, menos de la mitad fue capaz de responder algo realmente irónico. ¿Por qué pasó ésto si la ironía es tan difundida?',
          en: 'In her study she asked a group of people for an ironic comment. 25% couldn\'t answer the question and 55% just said something funny but not ironic. In fact, less than half was able to answer something which was actually ironic. Why did this happen, being irony so widely spread?'
        },
        img: {
          src: '/images/slide17.jpg',
          caption: {
            es: 'Vía Hexjam.',
            en: 'Via Hexjam.'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#388E3C'
        }
      },
      {
        title: {
          es: 'La moda de la ironía',
          en: 'The irony fashion'
        },
        description: {
          es: 'Christy Wampole, en su artículo titulado Contra los hipsters o cómo vivir sin ironía, habla acerca de cómo la ironía se ha difundido tanto entre los jóvenes que se ha vuelto una forma de vivir. Pero esta difusión es probablemente lo que la ha convertido en moda y ha incitado su uso entre la gente que ni siquiera sabe cómo usarla correctamente o qué es.',
          en: 'Christy Wampole, in an article that she wrote titled How to live without irony, she writes about how the use of irony has been so widespread within younger population to the point of becoming a way of living. But this massive diffusion of the irony is what has probably lead it to become a fashion and to incite its usage within people that don’t even know how to use it correctly or what it really is.'
        },
        img: {
          src: '/images/slide18.jpg',
          caption: {
            es: 'Vía Hexjam.',
            en: 'Via Hexjam.'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#d32f2f'
        }
      },
      {
        quote: {
          text: {
            es: '“La ironía es el modo más eficaz de autodefensa porque le permite a una persona eludir la responsabilidad de sus decisiones, estéticas o de cualquier otra índole”.',
            en: '“Irony is the most self-defensive mode, as it allows a person to dodge responsibility for his or her choices, aesthetic and otherwise.”'
          },
          author: 'Christy Wampole'
        },
        img: {
          src: '/images/slide19.jpg',
          caption: {
            es: 'Vía Princeton Alumni Weekly.',
            en: 'Via Princeton Alumni Weekly.'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#FF8F00'
        }
      },
      {
        title: {
          es: 'Peligros de una sociedad irónica',
          en: 'The dangers of an ironic society'
        },
        description: {
          es: 'Tal como Michael Ende criticó la experimentación, Christy Wampole también criticó la ironía. Hasta cierto punto, ambas pueden ser usadas como una forma de evadir la responsabilidad sobre de las propias acciones.',
          en: 'Just like Michael Ende criticized experimentation, here Christy criticizes irony. To some point, both can be used as a way of dodging responsibility about one’s actions.'
        },
        layoutAlign: 'center',
        background: {
          src: '/images/slide20background.jpg',
          caption: {
            es: 'Por Padurariu Alexandru, vía Unsplash',
            en: 'By Padurariu Alexandru, via Unsplash'
          }
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121',
          textAlign: 'center'
        }
      },
      {
        quote: {
          text: {
            es: 'Así que la próxima vez que vayas a hacer un experimento o a hablar irónicamente, piensa por un momento: ¿Estoy haciendo esto para eludir responsabilidad o para una finalidad legítima?',
            en: 'So the next time that you’re going to make an experiment or to talk ironically, think for a moment: Am I doing this to dodge responsibility of for a legitimate cause?'
          }
        },
        layoutAlign: 'center',
        background: {
          src: '/images/footer.jpg',
          caption: {
            es: 'Por kazuend, vía Unsplash',
            en: 'By kazuend, via Unsplash'
          },
          preventBlur: true
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121',
          textAlign: 'center'
        }
      }
    ];
  }
}());
