<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Tenencia responsable
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") La tenencia responsable de animales de compañía comprende un conjunto integral de deberes legales, éticos, sanitarios, ambientales y sociales que asume una persona natural o jurídica al incorporar un animal a su entorno familiar, comunitario o institucional. Esta no se limita al suministro de alimento o refugio, sino que implica garantizar condiciones que permitan al animal desarrollar una vida digna, saludable y acorde con su naturaleza biológica y comportamental, minimizando riesgos para la salud pública, la seguridad ciudadana y el medio ambiente.
        
            .bg-color-2.p-4(data-aos="fade-left")
              p.mb-0 Desde el enfoque del bienestar animal, la tenencia responsable reconoce a los animales como seres sintientes, capaces de experimentar dolor, placer, miedo, estrés y bienestar. Esta visión impone a los tutores la obligación ética y legal de prevenir cualquier forma de sufrimiento evitable. En Colombia, este principio cuenta con respaldo normativo: el marco legal vigente establece responsabilidades claras frente al cuidado, la protección y el trato digno de los animales, así como sanciones ante el abandono, la negligencia o el maltrato.

        p.mb-5 La tenencia responsable incorpora los siguientes componentes:

        .bg-full-width.bg-fondo-1
          .px-4.px-md-5
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Jurídico
                    p.text-center Cumplimiento normativo, responsabilidad civil y penal.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Sanitario
                    p.text-center Prevención de enfermedades, control de zoonosis y reducción de riesgos colectivos.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Conductual
                    p.text-center Manejo del comportamiento, socialización e interacción adecuada.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Ambiental
                    p.text-center Mitigación del impacto negativo sobre el entorno.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Ético
                    p.text-center Compromiso moral con la vida y el bienestar animal.
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/2.png', alt='')

            .row.justify-content-center
              .col-lg-10
                .tarjeta.bg-color-8
                  .px-4.px-md-5.py-4
                    .row.align-items-center
                      .col-lg-auto.mb-3.mb-lg-0
                        img(src="@/assets/curso/tema1/7-1.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Su correcta implementación promueve la convivencia armónica entre personas y animales, fortalece la salud pública y contribuye a una cultura de respeto y protección animal.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto de tenencia responsable
    
    p La tenencia responsable se define como la obligación permanente e intransferible del tutor de un animal de compañía de garantizar, durante toda su vida, las condiciones necesarias para su bienestar integral.
    p.mb-5 A continuación, se presentan las exigencias clave para cumplir con esta obligación:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Alimentación
              p Proporcionar una dieta adecuada y balanceada, ajustada a especie, raza, edad, tamaño, estado fisiológico y nivel de actividad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Hidratación
              p Asegurar el acceso permanente a agua potable, limpia y en cantidad suficiente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Atención veterinaria
              p Brindar servicios preventivos (vacunación, desparasitación), curativos y de manejo del dolor. Atender signos de enfermedad oportunamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Alojamiento
              p Ofrecer un espacio seguro, confortable y apropiado, que permita descanso, movilidad y expresión de conductas naturales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Estimulación y socialización
              p Proveer ejercicio físico, estímulo mental, enriquecimiento ambiental e interacción con humanos y otros animales cuando sea pertinente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Protección
              p Evitar lesiones, accidentes, sufrimiento, abuso o abandono.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Identificación y registro
              p Implementar sistemas de identificación para facilitar la recuperación del animal, controlar poblaciones y rastrear su historial sanitario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Prevención de riesgos colectivos
              p Minimizar el impacto sobre la salud pública, como zoonosis, mordeduras, accidentes y contaminación ambiental. 

    .bg-full-width.bg-color-12
      .px-4.px-md-5
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") Adicionalmente, el tutor debe:
            .bg-color-11.tarjeta.p-5(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Respetar la normatividad vigente.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Promover la adopción consciente y evitar la reproducción indiscriminada.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Asumir la responsabilidad legal y ética derivada de los actos del animal en espacios públicos y privados.

        p.mb-5 Este concepto está estrechamente vinculado con las cinco libertades del bienestar animal, las cuales constituyen el marco de referencia internacional para evaluar la calidad de vida de los animales bajo cuidado humano:

        .bg-full-width.bg-fondo-1
          .px-4.px-md-5
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-8.p-5.h-100.shadow-app
                    img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Libre de hambre y sed
                    p.text-center Acceso a alimentación e hidratación adecuada.
                  .bg-color-8.p-5.h-100.shadow-app
                    img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Libre de incomodidad
                    p.text-center Alojamiento adecuado, protección climática y confort.
                  .bg-color-8.p-5.h-100.shadow-app
                    img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Libre de dolor, lesiones y enfermedades
                    p.text-center Atención veterinaria y prevención de sufrimiento físico.
                  .bg-color-8.p-5.h-100.shadow-app
                    img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Libre de miedo y angustia
                    p.text-center Manejo adecuado para evitar estrés y sufrimiento emocional.
                  .bg-color-8.p-5.h-100.shadow-app
                    img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Libre para expresar comportamientos naturales
                    p.text-center Estímulo, ejercicio, espacio e interacción apropiada.
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/17.png', alt='')

        separador
        
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Mecanismos de identificación
        
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") La identificación de los animales de compañía es un pilar esencial de la tenencia responsable y un requisito progresivamente reconocido por autoridades sanitarias, ambientales y de protección animal. Esta permite:
    
        .bg-color-7.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 170px").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Establecer un vínculo verificable entre el animal y su tutor.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Facilitar la recuperación en caso de pérdida o robo.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Apoyar la vigilancia epidemiológica y el control de zoonosis.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Respaldar procesos de adopción, decomiso o custodia.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Contribuir directamente a la reducción del abandono.
    
    p.mb-5 Desde la perspectiva del bienestar animal y en consonancia con la normatividad colombiana que reconoce a los animales como seres sintientes, la identificación trasciende lo administrativo: es una medida preventiva de protección, seguridad y responsabilidad social. Dado que ningún método por sí solo es infalible, se recomienda la combinación de mecanismos visibles y permanentes, priorizando aquellos con mayor confiabilidad.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Comparativo de mecanismos de identificación
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Mecanismo
            th.bg-color-9 Descripción y características
            th.bg-color-9 Ventajas
            th.bg-color-9 Limitaciones / Uso recomendado
        tbody
          tr
            td Collar con placa identificativa
            td Placa con nombre del animal y datos del tutor, visible en el collar o arnés.
            td Identificación inmediata y sin equipos especiales.
            td Puede perderse o retirarse. Se recomienda como complemento, no como único método.
          tr.bg-color-sintesis
            td Tatuaje de identificación
            td Código alfanumérico tatuado en zonas del cuerpo (oreja, abdomen).
            td Bajo costo, útil en campañas de esterilización.
            td Puede desvanecerse; requiere base de datos activa. Útil como refuerzo del microchip.
          tr
            td Microchip de identificación (RFID)
            td Dispositivo subcutáneo con código único, escaneable por lector.
            td Permanente, difícil de falsificar, reconocido internacionalmente.
            td Requiere lector y base de datos activa. Es el método más confiable y recomendado.
          tr.bg-color-sintesis
            td Dispositivos GPS / telemetría
            td Tecnología de rastreo en tiempo real mediante aplicaciones móviles.
            td Prevención de extravíos, útil en zonas rurales.
            td No es válido legalmente; depende de batería e internet. Solo complemento.
          tr
            td Placas digitales con QR
            td Código QR que enlaza a una ficha digital del animal.
            td Información extensa y actualizable; fácil acceso con celular.
            td Requiere conexión y mantenimiento del perfil digital. Recomendado como complemento.
          tr.bg-color-sintesis
            td Identificación genética (ADN)
            td Análisis de muestras biológicas para comparar perfiles genéticos.
            td Precisión absoluta; útil en disputas legales o casos de maltrato.
            td Alto costo y complejidad. No viable para identificación masiva o cotidiana.
          tr
            td Marcas temporales / etiquetas de campaña
            td Elementos plásticos o textiles usados en jornadas institucionales.
            td Útiles en vacunación, esterilización o censos.
            td Valor solo operativo y transitorio. No constituyen identificación formal.


    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Registro de la mascota
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El registro de las mascotas es el proceso mediante el cual se formaliza la información del animal de compañía y de su tutor en sistemas documentales y bases de datos oficiales o institucionales, con fines de identificación, control sanitario, trazabilidad, responsabilidad legal y gestión de políticas públicas.
    
        .bg-color-2.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Su finalidad principal es garantizar que cada animal esté asociado a un responsable legal, cuente con un historial sanitario verificable y pueda ser localizado oportunamente en casos de pérdida, abandono, emergencias sanitarias, incidentes de convivencia o actuaciones de autoridad.
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Un sistema de registro eficaz debe integrar información completa del animal (especie, sexo, edad aproximada, características físicas), del tutor (datos de identificación y contacto), del mecanismo de identificación utilizado, del estado sanitario y de la condición legal del animal, todo ello bajo el cumplimiento de la normativa vigente sobre protección de datos personales.
    
        .bg-color-8.tarjeta.p-4(data-aos="fade-left")
          p.mb-0 En Colombia, aunque no existe aún un registro nacional único y obligatorio para todas las mascotas, múltiples municipios y departamentos han implementado registros locales, lo que hace necesaria la articulación entre registros territoriales, bases de datos de microchips y programas institucionales, con el acompañamiento de autoridades locales, el Ministerio de Salud y Protección Social, el Ministerio de Agricultura y Desarrollo Rural, el Instituto Colombiano Agropecuario (ICA) y organizaciones de protección animal.
    
    p.mb-5 El registro de las mascotas no se limita a una sola base de datos, sino que comprende un conjunto complementario de documentos y sistemas que, en su conjunto, garantizan la identificación, el seguimiento sanitario, la trazabilidad y la responsabilidad del tutor. Los tipos de registro de mascotas son: 

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Carné de vacunación")
            p Constituye el registro sanitario básico y obligatorio de toda mascota. En este documento se consignan las vacunas aplicadas, fechas, refuerzos, número de lote, laboratorio del biológico y datos del médico veterinario responsable. Es fundamental para el control de enfermedades de interés en salud pública, especialmente zoonosis como la rabia, y es exigido en trámites de transporte, adopción, ingreso a guarderías, hoteles, eventos y procedimientos oficiales. Debe mantenerse actualizado durante toda la vida del animal.
          .div(titulo="Registro de desparasitación y medicina preventiva")
            p Complementa el carné de vacunación e incluye información sobre desparasitaciones internas y externas, control de ectoparásitos, chequeos clínicos periódicos y otras medidas preventivas. Este registro permite evidenciar prácticas responsables de salud animal y reduce riesgos para otros animales y para las personas.
          .div(titulo="Registro municipal o distrital de mascotas")
            p Corresponde a la inscripción del animal en las bases de datos oficiales de las alcaldías o entes territoriales. Generalmente incluye datos del tutor, del animal y del mecanismo de identificación, y respalda la tenencia legal, facilita la recuperación en caso de extravío y apoya programas públicos de bienestar animal, esterilización y control poblacional.
          .div(titulo="Registro asociado al microchip de identificación")
            p En este registro, el código único del dispositivo debe estar vinculado a una base de datos autorizada. Este registro permite la identificación permanente del animal y la consulta rápida de los datos del tutor por parte de veterinarios, autoridades y centros de protección animal, siendo el mecanismo de referencia más recomendado.
          
    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/29.png", alt="").mb-4.mb-lg-0
      .col-lg-9.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Registro de esterilización o control reproductivo")
            p Certifica el procedimiento quirúrgico o método anticonceptivo aplicado, indicando fecha, profesional responsable y entidad ejecutora. Es clave para los programas de control poblacional y para demostrar prácticas de reproducción responsable.
          .div(titulo="Registro de adopción o procedencia legal")
            p Documento que acredita el origen del animal, especialmente en procesos de adopción desde refugios, fundaciones o programas institucionales. Este registro fortalece la trazabilidad, previene el comercio ilegal y define claramente las responsabilidades del tutor.
          .div(titulo="Registro de responsabilidad civil y convivencia")
            p Cuando aplique, puede incluir seguros de responsabilidad civil y el cumplimiento de normas específicas de convivencia ciudadana. Este registro protege a terceros y refuerza el compromiso legal del tutor frente a posibles incidentes.
          .div(titulo="Registro para transporte y movilización")
            p Comprende los certificados sanitarios y documentos exigidos para la movilización nacional o internacional de mascotas, garantizando el cumplimiento de requisitos sanitarios y de bienestar animal establecidos por las autoridades competentes.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-9.tarjeta.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/30.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La integración de todos estos registros permite construir un historial integral de cada mascota, facilita la toma de decisiones sanitarias, fortalece la protección del bienestar animal, reduce el abandono y mejora la capacidad institucional para responder ante situaciones de riesgo, consolidando un modelo efectivo y sostenible de tenencia responsable.



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
