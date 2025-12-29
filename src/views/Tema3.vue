<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manejo humanitario
    
    .bg-full-width.bg-color-12
      .px-4.px-md-5
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") El manejo humanitario comprende el conjunto integral de principios éticos, prácticas de cuidado, intervenciones sanitarias y decisiones responsables orientadas a garantizar que las mascotas, tanto convencionales como no convencionales, reciban un trato digno, respetuoso y compasivo durante todas las etapas de su vida, desde su nacimiento o adopción hasta la vejez, la enfermedad avanzada o el final de la vida.
        
            .bg-color-11.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Este manejo se fundamenta en el reconocimiento de los animales como seres sintientes, capaces de experimentar dolor físico, sufrimiento emocional, miedo, estrés y angustia, lo que obliga a que cualquier forma de manejo, tratamiento, confinamiento o intervención clínica se realice bajo el principio de mínimo sufrimiento y máximo bienestar posible.

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") El manejo humanitario no se limita a evitar actos de maltrato evidentes, sino que incluye la prevención del sufrimiento silencioso, el abandono sanitario, la negligencia por desconocimiento, la prolongación innecesaria del dolor y las prácticas que, aunque socialmente normalizadas, comprometen la calidad de vida del animal.
            .row.align-items-center.mb-3
              .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                img(src="@/assets/curso/tema3/4.svg", style="max-width: 295px").mx-auto
              .col-lg.order-lg-1
                .bg-color-13.tarjeta.p-4(data-aos="fade-left")
                  p.mb-0 En Colombia, este enfoque se encuentra respaldado por un marco legal claro, que incluye la Ley 84 de 1989, la Ley 1774 de 2016 y la Ley 2455 de 2025 (Ley Ángel), las cuales establecen que el tutor tiene la obligación legal y ética de proporcionar atención veterinaria oportuna, condiciones de vida compatibles con la especie y decisiones responsables cuando el bienestar del animal se ve comprometido de forma irreversible.
            p El manejo humanitario cobra especial relevancia en las mascotas no convencionales, ya que el desconocimiento de sus necesidades fisiológicas, ambientales y comportamentales puede generar sufrimiento crónico inadvertido, prolongando enfermedades, dolor o estrés sin que el tutor sea plenamente consciente de ello.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Cuidados paliativos
        
        .row.mb-5.align-items-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-10.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  p.mb-0 Los cuidados paliativos veterinarios constituyen un enfoque clínico y ético destinado a aliviar el dolor, el malestar y el sufrimiento cuando una enfermedad es incurable, crónica avanzada, degenerativa o terminal, y las posibilidades de recuperación son limitadas o inexistentes. A diferencia del tratamiento curativo, los cuidados paliativos no buscan prolongar la vida a cualquier costo, sino preservar la calidad de vida, respetando la dignidad del animal y promoviendo un final de vida libre de sufrimiento evitable.
    
    p.mb-5 Este enfoque también reconoce la dimensión emocional del tutor, brindándole acompañamiento, información clara y apoyo para tomar decisiones difíciles de manera consciente, informada y responsable.
    TabsB.color-acento-contenido.mb-5
      .p-4(titulo="Objetivos de los cuidados paliativos" :icono="require('@/assets/componentes/1.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0
            h4 Objetivos de los cuidados paliativos
            p Los cuidados paliativos tienen como objetivos fundamentales:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Control eficaz del dolor y de otros síntomas físicos como dificultad respiratoria, náuseas, vómitos, convulsiones, prurito o debilidad extrema.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Reducción del estrés, la ansiedad, el miedo y la confusión, especialmente en animales geriátricos o neurológicos.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Mantenimiento de la movilidad, la funcionalidad y la autonomía el mayor tiempo posible.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Garantía de confort térmico, nutricional, postural y ambiental.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Acompañamiento emocional del animal y fortalecimiento del vínculo con el tutor.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Evaluación ética y profesional del momento adecuado para considerar la eutanasia humanitaria.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/7.png', alt='Texto que describa la imagen')
      .p-4(titulo="Cuidados paliativos en mascotas convencionales" :icono="require('@/assets/componentes/1.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0
            h4 Cuidados paliativos en mascotas convencionales
            p En perros y gatos, los cuidados paliativos pueden abarcar múltiples áreas de intervención:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Manejo farmacológico del dolor mediante analgésicos, antiinflamatorios, opioides o neuromoduladores, siempre bajo prescripción veterinaria.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Soporte nutricional adaptado a la condición clínica, incluyendo dietas terapéuticas, alimentos de fácil digestión o alimentación asistida.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Hidratación adecuada por vía oral o subcutánea, cuando el animal no puede consumir líquidos por sí mismo.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Manejo de heridas crónicas, úlceras por decúbito, infecciones secundarias y problemas de movilidad.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Adecuación del entorno doméstico, incorporando superficies antideslizantes, rampas, camas ortopédicas y accesos fáciles a agua y alimento.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Control de la incontinencia urinaria o fecal, manteniendo una higiene adecuada para evitar infecciones y dermatitis.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/8.png', alt='Texto que describa la imagen')
      .p-4(titulo="Cuidados paliativos en mascotas no convencionales" :icono="require('@/assets/componentes/1.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0
            h4 Cuidados paliativos en mascotas no convencionales
            p En aves, roedores, lagomorfos, reptiles y peces, los cuidados paliativos requieren un enfoque aún más cuidadoso, ya que estas especies tienden a ocultar los signos de dolor y enfermedad como mecanismo de defensa.
            p Las medidas incluyen:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Control ambiental estricto, ajustando temperatura, humedad, iluminación y ventilación según la especie.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Reducción de la manipulación innecesaria, que puede generar estrés severo.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Aislamiento del estrés social, territorial o reproductivo cuando sea necesario.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Ajuste nutricional específico, evitando deficiencias o excesos que agraven la condición.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Uso extremadamente prudente de analgésicos y medicamentos, solo bajo supervisión veterinaria especializada.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Observación constante de cambios sutiles en el comportamiento, postura, consumo de alimento y respuesta al entorno.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/9.png', alt='Texto que describa la imagen')

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Enfermedades degenerativas
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Las enfermedades degenerativas son condiciones de evolución progresiva e irreversible, que ocasionan el deterioro gradual de órganos, tejidos o funciones corporales, comprometiendo de forma creciente la calidad de vida del animal.
    
        .bg-color-13.tarjeta.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aunque algunas de estas enfermedades no producen dolor intenso en sus etapas iniciales, sí generan pérdida de movilidad, autonomía, capacidades sensoriales o funciones vitales, lo que exige un manejo humanitario continuo y adaptativo.
        p Las enfermedades degenerativas en las mascotas requieren un abordaje continuo y compasivo, orientado a preservar el bienestar, aliviar el sufrimiento y acompañar de manera responsable el proceso de envejecimiento o deterioro progresivo, independientemente de la especie.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Enfermedades degenerativas en mascotas convencionales")
            p En perros y gatos, las más frecuentes incluyen:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Artrosis y enfermedades osteoarticulares crónicas.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Enfermedad renal crónica.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Cardiopatías degenerativas.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Enfermedades neurológicas progresivas.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Neoplasias de crecimiento lento.
            p El manejo humanitario implica:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Diagnóstico temprano y seguimiento periódico.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0  Plan de manejo integral a largo plazo.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Control del dolor, inflamación y síntomas secundarios.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Adaptación del entorno físico y rutinas diarias.
            p Evaluación constante de la calidad de vida y bienestar.
          .div(titulo="Enfermedades degenerativas en mascotas no convencionales")
            p En especies no convencionales pueden presentarse:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Degeneración dental crónica en roedores y conejos.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Trastornos metabólicos y óseos en reptiles.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Enfermedades respiratorias crónicas en aves.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Degeneración muscular, ósea y orgánica en peces por mala calidad del agua.
            p El manejo se enfoca en:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Corrección inmediata y permanente del entorno.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Nutrición adecuada a la especie y etapa de vida.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Reducción de factores estresantes.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Evaluación ética oportuna cuando el deterioro es irreversible.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Condición crónica degenerativa
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-14.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una condición crónica degenerativa es aquella que persiste en el tiempo, progresa gradualmente y no tiene cura, pero puede ser controlada para mantener una calidad de vida aceptable durante meses o incluso años.
    
    p.mb-5 Estas condiciones requieren un alto grado de compromiso del tutor, disciplina en el manejo y acompañamiento veterinario constante.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-4(titulo="Manejo de condiciones crónicas en mascotas convencionales")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Manejo de condiciones crónicas en mascotas convencionales
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Tratamientos farmacológicos de mantenimiento.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Dietas terapéuticas específicas.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Rehabilitación física, fisioterapia y ejercicios controlados.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Control del peso corporal.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Evaluaciones periódicas del dolor, el estado general y la respuesta al tratamiento.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/15.png', alt='Texto que describa la imagen')
      .p-4(titulo="Manejo de condiciones crónicas en mascotas no convencionales")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Manejo de condiciones crónicas en mascotas no convencionales
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Ajustes permanentes del ambiente (temperatura, iluminación UV, humedad).
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Observación diaria de conducta, postura y consumo.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Nutrición estrictamente balanceada.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Evitar completamente tratamientos empíricos o caseros.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/16.png', alt='Texto que describa la imagen')
      .p-4(titulo="Evaluación de la calidad de vida y decisiones éticas")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Evaluación de la calidad de vida y decisiones éticas
            p El manejo humanitario exige una evaluación periódica y objetiva de la calidad de vida, considerando:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Nivel de dolor y su control.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Capacidad de alimentarse e hidratarse.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Movilidad y autonomía.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Interacción con el entorno y el tutor.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Respuesta real al tratamiento.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/17.png', alt='Texto que describa la imagen')
    
    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.svg", data-aos="zoom-in")
      .col-lg-9
        .bg-color-15.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cuando la calidad de vida es irremediablemente baja y el sufrimiento no puede ser controlado, la eutanasia humanitaria, realizada por un profesional y bajo protocolos éticos y legales, constituye un acto de compasión y responsabilidad, no de abandono.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Enfoque legal y responsabilidad del tutor
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") En Colombia, prolongar el sufrimiento evitable, negar atención veterinaria o mantener animales en condiciones incompatibles con su bienestar puede constituir maltrato animal, con sanciones legales. El manejo humanitario representa:

        .bg-color-6.tarjeta.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/21.svg', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Un deber ético.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Una obligación legal.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Un compromiso social con la protección animal.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Una expresión concreta del respeto hacia los animales como seres sintientes.
        

        
        


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
