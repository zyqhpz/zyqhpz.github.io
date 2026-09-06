<template>
  <section class="container-shell hero-section">
    <div class="hero-copy">
      <p class="availability">
        <span class="availability-dot" aria-hidden="true" />
        Software Engineer · Malaysia
      </p>

      <h1 class="display-font hero-title"><span>Hi, I'm</span>Haziq Hapiz</h1>

      <p class="hero-description">
        An aspiring Software Engineer from Malaysia&nbsp;
        <IconMalaysia class="flag" />&nbsp;with a passion to make meaningful
        impacts!
      </p>

      <div class="hero-actions">
        <a class="primary-action" href="#projects"
          >Explore my work <span aria-hidden="true">↓</span></a
        >
        <Connect />
      </div>

      <TechStack />
    </div>

    <div class="portrait-wrap" aria-hidden="true">
      <div class="orbit orbit-one" />
      <div class="orbit orbit-two" />
      <div class="portrait-card">
        <div class="portrait-grid" />
        <img
          src="/img/zyq.png"
          alt=""
          class="portrait"
          width="400"
          height="400"
        />
        <span class="code-chip chip-one">&lt;/&gt;</span>
        <span class="code-chip chip-two">{ }</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: grid;
  min-height: calc(100vh - 6rem);
  align-items: center;
  gap: 3rem;
  padding-block: 4.5rem 5.5rem;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.4rem;
  padding: 0.48rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.45);
  color: #cbd5e1;
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.availability-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #4ade80;
  box-shadow:
    0 0 0 4px rgba(74, 222, 128, 0.1),
    0 0 14px rgba(74, 222, 128, 0.8);
}

.hero-title {
  max-width: 49rem;
  margin: 0;
  font-size: clamp(3.4rem, 13vw, 7.25rem);
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 0.9;
}

.hero-title span {
  display: block;
  margin-bottom: 0.42em;
  color: var(--muted);
  font-size: 0.28em;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.hero-description {
  max-width: 38rem;
  margin: 1.65rem 0 0;
  color: #bac5d5;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.75;
}

.flag {
  display: inline-block;
  transform: translateY(0.12em);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-action {
  display: inline-flex;
  min-height: 3.15rem;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.9rem;
  background: #eef2ff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  color: #111827;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.primary-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.3);
}

.portrait-wrap {
  position: relative;
  display: grid;
  width: min(20rem, 78vw);
  justify-self: center;
  place-items: center;
}

.portrait-card {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid rgba(181, 192, 255, 0.22);
  border-radius: 32% 68% 62% 38% / 39% 40% 60% 61%;
  background: linear-gradient(
    145deg,
    rgba(139, 156, 255, 0.22),
    rgba(15, 23, 42, 0.9)
  );
  box-shadow:
    0 32px 80px rgba(0, 0, 0, 0.32),
    inset 0 1px rgba(255, 255, 255, 0.08);
  animation: morph 12s ease-in-out infinite;
}

.portrait-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 2rem 2rem;
  mask-image: linear-gradient(to bottom, black, transparent 90%);
}

.portrait {
  position: absolute;
  inset: 4% 4% 0;
  width: 92%;
  height: 92%;
  object-fit: contain;
  filter: drop-shadow(0 24px 22px rgba(0, 0, 0, 0.35));
}

.orbit {
  position: absolute;
  border: 1px solid rgba(139, 156, 255, 0.16);
  border-radius: 50%;
}

.orbit-one {
  inset: -10%;
}

.orbit-two {
  inset: -22%;
  border-style: dashed;
  opacity: 0.6;
}

.code-chip {
  position: absolute;
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.82);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  color: var(--accent-bright);
  font-family: monospace;
  font-size: 0.78rem;
  font-weight: 700;
  backdrop-filter: blur(12px);
}

.chip-one {
  top: 14%;
  left: 2%;
}

.chip-two {
  right: 2%;
  bottom: 14%;
  color: var(--cyan);
}

@keyframes morph {
  0%,
  100% {
    border-radius: 32% 68% 62% 38% / 39% 40% 60% 61%;
  }

  50% {
    border-radius: 60% 40% 35% 65% / 48% 62% 38% 52%;
  }
}

@media (min-width: 860px) {
  .hero-section {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    gap: 2rem;
    padding-block: 5rem 7rem;
  }

  .portrait-wrap {
    width: min(24rem, 29vw);
  }
}
</style>
