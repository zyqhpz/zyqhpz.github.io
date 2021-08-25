<template>
    <ul>
  <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      EduMaterial was developed to join UN's SDG mission on Goals 4. This is a project for BITM2113 (Web Application Development) course in UTeM.
    </b-card-text>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="blue">CSS3</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="yellow">Javascript</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge>
    <!-- <b-button href="https://www.facebook.com/haziqhapiz" target="_blank" variant="primary">Go somewhere</b-button> -->
  </b-card>
  <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      EduMaterial was developed to join UN's SDG mission on Goals 4. This is a project for BITM2113 (Web Application Development) course in UTeM.
    </b-card-text>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="blue">CSS3</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="yellow">Javascript</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge>
    <!-- <b-button href="https://www.facebook.com/haziqhapiz" target="_blank" variant="primary">Go somewhere</b-button> -->
  </b-card>
    <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      EduMaterial was developed to join UN's SDG mission on Goals 4. This is a project for BITM2113 (Web Application Development) course in UTeM.
    </b-card-text>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="blue">CSS3</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="yellow">Javascript</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge>
    <!-- <b-button href="https://www.facebook.com/haziqhapiz" target="_blank" variant="primary">Go somewhere</b-button> -->
  </b-card>
    <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      EduMaterial was developed to join UN's SDG mission on Goals 4. This is a project for BITM2113 (Web Application Development) course in UTeM.
    </b-card-text>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="blue">CSS3</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="yellow">Javascript</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge>
    <!-- <b-button href="https://www.facebook.com/haziqhapiz" target="_blank" variant="primary">Go somewhere</b-button> -->
  </b-card>
    <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      EduMaterial was developed to join UN's SDG mission on Goals 4. This is a project for BITM2113 (Web Application Development) course in UTeM.
    </b-card-text>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="blue">CSS3</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="yellow">Javascript</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge>
    <!-- <b-button href="https://www.facebook.com/haziqhapiz" target="_blank" variant="primary">Go somewhere</b-button> -->
  </b-card>
  
  </ul>

</template>

<script>
import { CBadge } from '@chakra-ui/vue'

export default {
    name: 'Card',
    components: {
        CBadge
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap);
b-card {
  position: absolute;
  text-align: center;
  left: 25%;
  right: inherit;
  bottom: 50%;
  left: 10px;
  right: 10px;
  display: block;
  gap: 10px;
  margin-left: 15px;
  padding: 20px;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  margin: 15px;
}
</style>