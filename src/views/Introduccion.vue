<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") La tenencia responsable de animales de compañía es un compromiso ético, legal y social que implica mucho más que brindar alimento y refugio. Significa garantizar el bienestar integral de las mascotas, entendidas como seres sintientes, capaces de experimentar emociones y dolor. Este enfoque promueve una relación respetuosa y consciente entre humanos y animales.
        .bg-color-7(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/intro/2.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") En Colombia, la normativa vigente establece obligaciones claras para los tutores, incluyendo la identificación, el registro, la atención veterinaria, la prevención de enfermedades y la protección contra el maltrato. Estas medidas no solo benefician a los animales, sino que también protegen la salud pública y el medio ambiente, bajo el principio de Una Sola Salud.
    
    .tarjeta.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/intro/3.png", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El presente documento desarrolla los aspectos fundamentales de la tenencia responsable, la salud animal y el manejo humanitario. Además, destaca la importancia de la medicina preventiva, el control de zoonosis, las obligaciones legales del tutor y la necesidad de garantizar una vida digna para todas las especies domésticas, tanto convencionales como no convencionales.
    
       

</template>

<script>
export default {
  name: 'Introduccion',
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
