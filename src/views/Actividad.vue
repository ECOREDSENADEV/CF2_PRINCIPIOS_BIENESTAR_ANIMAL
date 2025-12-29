<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión del bienestar animal en la tenencia responsable de mascotas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el conocimiento sobre los principios, prácticas, normativas y responsabilidades relacionados con el bienestar animal y la tenencia responsable de animales de compañía en Colombia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los pilares fundamentales de la tenencia responsable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar alimento y refugio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reconocer a los animales como seres sintientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar entrenamientos avanzados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar visitas al veterinario innecesarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué mecanismo de identificación se considera el más confiable?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tatuaje de identificación.', esCorrecta: false },
            { id: 'b', texto: 'Collar con placa.', esCorrecta: false },
            { id: 'c', texto: 'Placa con QR.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Microchip de identificación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué documento es obligatorio para evidenciar la vacunación de una mascota?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Registro civil del animal.', esCorrecta: false },
            { id: 'b', texto: 'Carné de vacunación.', esCorrecta: true },
            { id: 'c', texto: 'Licencia de tenencia.', esCorrecta: false },
            { id: 'd', texto: 'Ficha de adopción.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes enfermedades es de control oficial y requiere vacunación obligatoria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Leptospirosis.', esCorrecta: false },
            { id: 'b', texto: 'Toxoplasmosis.', esCorrecta: false },
            { id: 'c', texto: 'Rabia.', esCorrecta: true },
            { id: 'd', texto: 'Dermatofitosis.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué acción hace parte del control reproductivo responsable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el contacto con otros animales.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Esterilización quirúrgica.', esCorrecta: true },
            { id: 'c', texto: 'Reducción del ejercicio.', esCorrecta: false },
            { id: 'd', texto: 'Uso de GPS para rastreo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué zoonosis puede transmitirse por contacto con heces contaminadas de gatos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Rabia.', esCorrecta: false },
            { id: 'b', texto: 'Leptospirosis.', esCorrecta: false },
            { id: 'c', texto: 'Toxoplasmosis.', esCorrecta: true },
            { id: 'd', texto: 'Psitacosis.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué principio de bienestar animal busca asegurar que el animal tenga un ambiente adecuado para descansar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Libre de miedo y angustia.', esCorrecta: false },
            { id: 'b', texto: 'Libre de incomodidad.', esCorrecta: true },
            { id: 'c', texto: 'Libre de enfermedades.', esCorrecta: false },
            { id: 'd', texto: 'Libre de hambre.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes es una medida básica de bioseguridad en el hogar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de GPS.', esCorrecta: false },
            { id: 'b', texto: 'Lavado de manos.', esCorrecta: true },
            { id: 'c', texto: 'Entrenamiento positivo.', esCorrecta: false },
            { id: 'd', texto: 'Construcción de cercas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la vía de transmisión más común de la leptospirosis?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contacto con saliva.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Contacto con orina contaminada.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Inhalación de polvo.', esCorrecta: false },
            { id: 'd', texto: 'Pelo infectado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué entidad en Colombia regula el control de enfermedades zoonóticas en mascotas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ministerio de Agricultura.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Secretaría de Medio Ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ministerio de Salud y Protección Social.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Ministerio de Defensa.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El registro de mascotas solo es obligatorio si se tiene más de un animal.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La medicina preventiva reduce el sufrimiento animal y protege la salud pública.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las aves ornamentales deben vacunarse obligatoriamente en Colombia.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El abandono sanitario también se considera una forma de maltrato animal.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La normativa colombiana no aplica para mascotas no convencionales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
