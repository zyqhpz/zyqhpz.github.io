<template>
  <footer class="footer-wrap">
    <div class="container-shell footer-content">
      <p>
        Developed with &#10084;&#65039; by Haziq Hapiz &#169; {{ currentYear }}
      </p>
      <a href="#" aria-label="Back to top">Back to top &#8593;</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-wrap {
  position: relative;
  z-index: 10;
  border-top: 1px solid var(--line);
  background: rgba(3, 7, 18, 0.38);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding-block: 1.6rem;
  text-align: center;
}

.footer-content p {
  margin: 0;
  color: #77849a;
  font-size: 0.72rem;
}

.footer-content > a {
  color: #aebbcf;
  font-size: 0.72rem;
  font-weight: 600;
  text-decoration: none;
}

.footer-content > a:hover {
  color: white;
}

@media (min-width: 650px) {
  .footer-content {
    position: relative;
    min-height: 4.5rem;
    justify-content: center;
    padding-block: 1.25rem;
  }

  .footer-content > a {
    position: absolute;
    right: 0;
  }
}
</style>
