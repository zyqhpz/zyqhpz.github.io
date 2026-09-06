<template>
  <div class="container-shell about-page">
    <header class="about-hero">
      <p class="eyebrow">My journey</p>
      <h1 class="display-font">About Me</h1>
      <p>
        Building thoughtful software through curiosity, care, and a drive to
        create meaningful impact.
      </p>
    </header>

    <div class="about-layout">
      <aside class="profile-panel">
        <div class="avatar-frame">
          <img
            src="/img/zyq.png"
            alt="Illustrated portrait of Haziq Hapiz"
            width="300"
            height="300"
          />
        </div>
        <h2 class="display-font">Haziq Hapiz</h2>
        <p>Software Engineer · Malaysia</p>
        <Connect />
      </aside>

      <div class="history">
        <WorkExperience />
        <Education />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding-block: 4.5rem 6rem;
}

.about-hero {
  max-width: 46rem;
  padding-bottom: 3rem;
}
.about-hero h1 {
  margin: 0.8rem 0 0;
  font-size: clamp(3.25rem, 10vw, 6.5rem);
  font-weight: 800;
  letter-spacing: -0.065em;
  line-height: 0.95;
}
.about-hero > p:last-child {
  max-width: 37rem;
  margin: 1.4rem 0 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.75;
}

.about-layout {
  display: grid;
  gap: 2.5rem;
  border-top: 1px solid var(--line);
  padding-top: 2rem;
}

.profile-panel {
  height: max-content;
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  background: rgba(15, 23, 42, 0.42);
}

.avatar-frame {
  display: grid;
  overflow: hidden;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 1.1rem;
  background: linear-gradient(
    145deg,
    rgba(139, 156, 255, 0.2),
    rgba(103, 232, 249, 0.06)
  );
}
.avatar-frame img {
  width: 88%;
  height: 88%;
  object-fit: contain;
  filter: drop-shadow(0 18px 18px rgba(0, 0, 0, 0.28));
}
.profile-panel h2 {
  margin: 1.2rem 0 0.15rem;
  font-size: 1.25rem;
  letter-spacing: -0.03em;
}
.profile-panel > p {
  margin: 0 0 1.2rem;
  color: var(--muted);
  font-size: 0.82rem;
}

.history {
  display: grid;
  gap: 4rem;
  min-width: 0;
}

@media (min-width: 850px) {
  .about-page {
    padding-block: 6rem 8rem;
  }
  .about-layout {
    grid-template-columns: 16rem minmax(0, 1fr);
    gap: clamp(3rem, 7vw, 6rem);
    padding-top: 3rem;
  }
  .profile-panel {
    position: sticky;
    top: 2rem;
  }
}
</style>
