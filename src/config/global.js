export default {
  global: {
    Name:
      'Gestión del bienestar animal en la tenencia responsable de animales de compañía',
    Description:
      'El componente formativo explica la tenencia responsable de mascotas, incluyendo deberes legales y éticos para asegurar su bienestar. Aborda alimentación, salud, vacunación, desparasitación, bioseguridad, identificación y registro. Destaca el control de zoonosis, la salud pública y el manejo humanitario. Resalta leyes colombianas que protegen a los animales como seres sintientes y obligan a evitar el sufrimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tenencia responsable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de tenencia responsable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mecanismos de identificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Registro de la mascota',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Salud animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Medicina preventiva',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Vacunación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Desparasitación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Signos tempranos de enfermedad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Medidas de bioseguridad',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Salud pública',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Zoonosis asociadas a mascotas',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Enfermedades de control oficial',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Normativa sanitaria aplicable en Colombia',
            hash: 't_2_9',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo humanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cuidados paliativos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Enfermedades degenerativas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Condición crónica degenerativa',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Enfoque legal y responsabilidad del tutor',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tenencia responsable',
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Lineamientos para la política de tenencia responsable de animales de compañía y de producción</em>.',
      tipo: 'Manual / guía',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-tenencia-responsables-acy.pdf',
    },
    {
      tema: 'Salud animal',
      referencia:
        'Moreno–Velásquez, J., Sánchez, P., Zurita, H., Santacruz, D., & Gonzales, R. (2020). <em>Aves de compañía: aproximación al bienestar animal en la tenencia responsable</em>. Instituto Distrital de Protección y Bienestar Animal.',
      tipo: 'Documento oficial / normativa',
      link:
        'https://www.animalesbog.gov.co/documentos/35_Aves_tenenciaresponsable2020.pdf',
    },
    {
      tema: 'Salud animal',
      referencia:
        'Ibáñez, M. J., & Perera, M. (2012). <em>Conducta y manejo avanzado en perros problemáticos: Sigue las huellas del camino correcto</em> (1.ª ed.). Ediciones Díaz de Santos.',
      tipo: 'Libro técnico',
      link: 'https://www.editdiazdesantos.com/wwwdat/pdf/9788499693880.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Estado en el que un animal vive libre de hambre, dolor y miedo, y puede expresar sus comportamientos naturales.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas destinadas a evitar la entrada y propagación de enfermedades en el hogar, incluyendo higiene, cuarentenas y control de residuos.',
    },
    {
      termino: 'Eutanasia humanitaria',
      significado:
        'Procedimiento ético realizado por un profesional para terminar el sufrimiento de un animal con enfermedad irreversible, garantizando ausencia de dolor y estrés.',
    },
    {
      termino: 'Identificación',
      significado:
        'Método que permite reconocer y vincular a una mascota con su tutor, mediante microchips, collares, placas o códigos QR.',
    },
    {
      termino: 'Medicina preventiva',
      significado:
        'Conjunto de acciones orientadas a evitar enfermedades, como vacunación, desparasitación, controles veterinarios periódicos y alimentación adecuada.',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de leyes y disposiciones que regulan la protección, sanidad y bienestar de los animales en Colombia.',
    },
    {
      termino: 'Registro',
      significado:
        'Inscripción oficial de una mascota en bases de datos para control sanitario, identificación y localización en caso de pérdida.',
    },
    {
      termino: 'Ser sintiente',
      significado:
        'Reconocimiento legal y ético de que los animales pueden sentir dolor, placer, miedo y otras emociones.',
    },
    {
      termino: 'Tenencia responsable',
      significado:
        'Compromiso permanente del tutor para garantizar el bienestar físico, emocional y sanitario de su mascota.',
    },
    {
      termino: 'Zoonosis',
      significado:
        'Enfermedades que pueden transmitirse de los animales a los seres humanos, como la rabia o la toxoplasmosis.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774 de 2016 por medio de la cual se modifican el Código Civil, la Ley 84 de 1989 y el Código Penal, y se dictan otras disposiciones sobre protección animal</em>. Diario Oficial No. 49.747.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). <em>Ley 84 de 1989, Estatuto Nacional de Protección de los Animales</em>. Diario Oficial No. 39.120.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8242',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). <em>Política pública de protección y bienestar animal</em>. Gobierno de Colombia.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2025/05/VF_PoliticaNacionalProteccionBienestarAnimal_7_5_25.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Lineamientos para la tenencia responsable de animales de compañía</em>. Gobierno de Colombia.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-tenencia-responsables-acy.pdf',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – OMSA. (2019). <em>Código sanitario para los animales terrestres</em>. OMSA.',
      link: 'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/',
    },
    {
      referencia:
        'República de Colombia. (2025). <em>Ley 2455 de 18 de abril de 2025 por la cual se fortalece la lucha contra el maltrato animal y se actualiza el Estatuto Nacional de Protección de los Animales</em>. Diario Oficial No. 53.162.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=259656',
    },
    {
      referencia:
        'Serpell, J. (Ed.). (2022). <em>The domestic dog: Its evolution, behavior and interactions with people</em> (2nd ed.). Cambridge University Press.',
      link:
        'https://books.google.es/books?id=I8HU_3ycrrEC&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      referencia:
        'World Organisation for Animal Health – WOAH. (2021). <em>Animal welfare and five freedoms</em>. WOAH.',
      link:
        'https://www.woah.org/en/what-we-do/animal-health-and-welfare/animal-welfare/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
