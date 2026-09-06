<template>
  <header class="nav-wrap">
    <nav class="container-shell nav-bar" aria-label="Primary navigation">
      <NuxtLink
        class="brand display-font"
        to="/"
        aria-label="Haziq Hapiz, home"
      >
        <span>Haziq Hapiz</span>
      </NuxtLink>

      <div class="nav-links">
        <NuxtLink class="nav-link work-link" to="/">Work</NuxtLink>
        <NuxtLink class="nav-link" to="/about">About Me</NuxtLink>
        <a
          class="resume-link"
          href="https://drive.google.com/drive/folders/12x2SWgZW4xEiDh_1jM58uyZpDVmPKHz-?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: relative;
  z-index: 40;
  padding-top: 1rem;
}

.nav-bar {
  display: flex;
  min-height: 4.25rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.65rem 0.55rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 1.2rem;
  background: rgba(15, 23, 42, 0.62);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.nav-link,
.resume-link {
  border-radius: 0.75rem;
  color: #cbd5e1;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 180ms ease,
    background 180ms ease,
    transform 180ms ease;
}

.nav-link {
  display: inline-flex;
  padding: 0.7rem 0.8rem;
}

.work-link {
  display: none;
}
.nav-link:hover,
.nav-link.router-link-exact-active {
  background: rgba(255, 255, 255, 0.055);
  color: white;
}

.resume-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.72rem 0.85rem;
  border: 1px solid rgba(181, 192, 255, 0.22);
  background: rgba(139, 156, 255, 0.12);
  color: #e6eaff;
}

.resume-link:hover {
  transform: translateY(-1px);
  background: rgba(139, 156, 255, 0.2);
}

@media (max-width: 380px) {
  .brand {
    font-size: 0.8rem;
  }

  .nav-link {
    padding-inline: 0.5rem;
  }

  .resume-link {
    gap: 0.25rem;
    padding-inline: 0.6rem;
  }
}

@media (min-width: 540px) {
  .work-link {
    display: inline-flex;
  }
}

@media (min-width: 768px) {
  .nav-wrap {
    padding-top: 1.5rem;
  }
  .nav-bar {
    padding-inline: 0.8rem;
  }
  .brand {
    font-size: 0.98rem;
  }
  .nav-links {
    gap: 0.4rem;
  }
  .nav-link,
  .resume-link {
    font-size: 0.86rem;
  }
}
</style>
