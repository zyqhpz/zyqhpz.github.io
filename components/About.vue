<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <!-- <Details/> -->
    <h2 class="about">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h2>
  </section>
</template>

<script>
// import AboutUs from '#components/content'

// export default {
//   components: {
//     About
//   }
// }
</script>
