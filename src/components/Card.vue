<template>
  <!-- <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=1"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  > -->
  <div>
          <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>

  </div>
</template>

<script>
import { CBadge } from '@chakra-ui/vue'

export default {
    name: 'Card',
    components: {
        CBadge
    },
    // props: {
    //     title: String,
    //     description: String,
    //     image: String,
    //     badge: String,
    // },
}
</script>