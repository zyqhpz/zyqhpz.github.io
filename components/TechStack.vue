<template>
  <div class="stack-wrap">
    <p>My core skills</p>
    <div class="stack-list" aria-label="Core technologies">
      <span class="stack-item"><IconGolang />Go</span>
      <span class="stack-item"><IconPython />Python</span>
      <span class="stack-item"><IconTypescript />TypeScript</span>
      <span class="stack-item"><IconNextjs />Next.js</span>
      <span class="stack-item"><IconTailwind />Tailwind</span>
    </div>
  </div>
</template>

<style scoped>
.stack-wrap {
  margin-top: 2.4rem;
}
.stack-wrap > p {
  margin: 0 0 0.85rem;
  color: #7f8da3;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}
.stack-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.48rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.32);
  color: #aebbcf;
  font-size: 0.72rem;
  font-weight: 600;
}
.stack-item :deep(svg) {
  width: 1rem;
  height: 1rem;
}
</style>
