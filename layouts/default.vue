<template>
  <div class="site-shell">
    <div class="ambient ambient-one" aria-hidden="true" />
    <div class="ambient ambient-two" aria-hidden="true" />
    <NavBar />
    <main class="relative z-10 flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
provideHeadlessUseId(() => useId());

useHead({
  htmlAttrs: { lang: "en" },
  title: "Haziq Hapiz | Software Engineer",
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
    },
  ],
});

useSeoMeta({
  description:
    "An aspiring software engineer with a passion to make meaningful impacts!",
  author: "Haziq Hapiz",
  ogTitle: "Haziq Hapiz | Software Engineer",
  ogDescription:
    "An aspiring software engineer with a passion to make meaningful impacts!",
  ogImage: "https://zyqhpz.github.io/img/og.png",
  ogUrl: "https://zyqhpz.github.io",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Haziq Hapiz | Software Engineer",
  twitterDescription:
    "An aspiring software engineer with a passion to make meaningful impacts!",
  twitterImage: "https://zyqhpz.github.io/img/og.png",
});
</script>

<style>
:root {
  color-scheme: dark;
  --background: #111827;
  --background-deep: #0b1120;
  --surface: rgba(31, 41, 55, 0.72);
  --surface-strong: rgba(31, 41, 55, 0.94);
  --line: rgba(148, 163, 184, 0.16);
  --line-strong: rgba(148, 163, 184, 0.28);
  --text: #f8fafc;
  --muted: #aab7ca;
  --accent: #8b9cff;
  --accent-bright: #b5c0ff;
  --cyan: #67e8f9;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background-deep);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}
::selection {
  background: rgba(139, 156, 255, 0.35);
  color: white;
}
a,
button {
  -webkit-tap-highlight-color: transparent;
}
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 4px;
}

.site-shell {
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
  background: radial-gradient(
      circle at 12% 8%,
      rgba(79, 70, 229, 0.12),
      transparent 28rem
    ),
    radial-gradient(
      circle at 88% 38%,
      rgba(8, 145, 178, 0.08),
      transparent 30rem
    ),
    linear-gradient(115deg, #111827 0%, #1f2937 48%, #111827 100%);
}

.ambient {
  position: absolute;
  border-radius: 999px;
  filter: blur(90px);
  pointer-events: none;
  opacity: 0.16;
}

.ambient-one {
  top: 22rem;
  left: -12rem;
  width: 28rem;
  height: 28rem;
  background: #6366f1;
}
.ambient-two {
  right: -12rem;
  top: 62rem;
  width: 28rem;
  height: 28rem;
  background: #06b6d4;
}

.container-shell {
  width: min(1180px, calc(100% - 2rem));
  margin-inline: auto;
}

.display-font {
  font-family: "Manrope", sans-serif;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0;
  color: var(--accent-bright);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.eyebrow::before {
  width: 1.75rem;
  height: 1px;
  background: currentColor;
  content: "";
}

.section-heading {
  margin: 0.8rem 0 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(2rem, 5vw, 3.35rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.05;
}

.section-copy {
  max-width: 39rem;
  margin: 1rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.8;
}

@media (min-width: 768px) {
  .container-shell {
    width: min(1180px, calc(100% - 4rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
