<template>
  <div class="socials" aria-label="Social links">
    <a
      href="https://www.linkedin.com/in/haziqhapiz/"
      target="_blank"
      rel="noreferrer"
      aria-label="Haziq Hapiz on LinkedIn"
      ><IconLinkedin
    /></a>
    <a
      href="https://www.github.com/zyqhpz"
      target="_blank"
      rel="noreferrer"
      aria-label="Haziq Hapiz on GitHub"
      ><IconGithub
    /></a>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  gap: 0.6rem;
}
.socials a {
  display: grid;
  width: 3.15rem;
  height: 3.15rem;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 0.9rem;
  background: rgba(15, 23, 42, 0.48);
  color: #dbe4ef;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}
.socials a :deep(svg) {
  width: 1.35rem;
  height: 1.35rem;
}
.socials a:hover {
  transform: translateY(-2px);
  border-color: rgba(181, 192, 255, 0.35);
  background: rgba(139, 156, 255, 0.12);
}
</style>
