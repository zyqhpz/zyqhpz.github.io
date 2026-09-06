<template>
  <section id="projects" class="container-shell projects-section">
    <div class="section-intro">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2 class="section-heading">Personal projects</h2>
      </div>
      <p class="section-copy">
        A collection of products, experiments, and practical tools built across
        web development, real-time systems, and computer vision.
      </p>
    </div>

    <div class="project-grid">
      <component
        :is="project.href ? 'a' : 'article'"
        v-for="(project, index) in projects"
        :key="project.title"
        class="project-card"
        :class="{ featured: index === 0 || index === 3 }"
        :href="project.href"
        :target="project.href ? '_blank' : undefined"
        :rel="project.href ? 'noreferrer' : undefined"
      >
        <div class="image-wrap">
          <img
            :src="project.image"
            :alt="`${project.title} project image`"
            loading="lazy"
          />
          <span v-if="project.href" class="project-link" aria-hidden="true"
            >↗</span
          >
          <span class="project-number">{{
            String(index + 1).padStart(2, "0")
          }}</span>
        </div>

        <div class="project-content">
          <div>
            <h3 class="display-font">{{ project.title }}</h3>
            <span v-if="project.note" class="project-note">{{
              project.note
            }}</span>
          </div>
          <p>{{ project.description }}</p>
          <ul class="tags" :aria-label="`${project.title} technologies`">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
      </component>
    </div>
  </section>
</template>

<script setup lang="ts">
type Project = {
  title: string;
  note?: string;
  description: string;
  image: string;
  href?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Tic Tac Toe",
    description:
      "A multiplayer Tic Tac Toe game using WebSocket. The game allows two players to play against each other in real-time.",
    image: "/img/cards/tictactoe.png",
    href: "https://tct.haziqhapiz.my/",
    tags: ["Go", "JavaScript", "Web Development"],
  },
  {
    title: "Mutabaah Amal",
    description:
      "A web app for Muslims to track their daily religious practices, helping them stay consistent and motivated. The app includes a dashboard and a progress tracker to monitor their spiritual growth.",
    image: "/img/cards/mutabaah.png",
    href: "https://mutabaah-amal.vercel.app/",
    tags: ["NextJS", "Firebase", "Web Development"],
  },
  {
    title: "Kira Pelaburan",
    description:
      "Kira Pelaburan is an advanced investment calculator for personalised financial planning. Tailor your strategy with multiple monthly contributions, interest rates, and investment durations with a single click.",
    image: "/img/cards/kirapelaburan.png",
    href: "https://kira-pelaburan.vercel.app/",
    tags: ["NextJS", "Web Development"],
  },
  {
    title: "EventEQ",
    note: "(Final Year Project)",
    description:
      "A user-friendly web platform for renting high-quality PA system items The platform has camera capabilities for equipment verification through QR code scanning, ensuring a seamless rental experience.",
    image: "/img/cards/eventeq.png",
    href: "https://youtu.be/NciUvoDfpQQ",
    tags: ["React", "Go", "MongoDB", "Docker", "AWS", "Web Development"],
  },
  {
    title: "e-Kertas Kerja",
    note: "(Workshop 2)",
    description:
      "A web application for student clubs and university management streamlines paperwork management. It tracks approval status and offers a paperwork generator with the latest formats, saving time and improving efficiency.",
    image: "/img/cards/ekk.jpg",
    tags: ["Laravel", "PHP", "Web Development"],
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Freelance task to integrate DuitNow Online Banking and JomPay in Wordpress website. I did some customizations on the website depending on the requirements given by the client.",
    image: "/img/cards/wp-portfolio.png",
    tags: ["PHP", "Web Development"],
  },
  {
    title: "EduMaterial",
    description:
      "EduMaterial was developed to join UN's SDG mission on Goals 4. This is a group project for BITM2113 Web Application Development subject in UTeM.",
    image: "/img/cards/edumaterial.png",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Development"],
  },
  {
    title: "Vehicle Counter",
    description:
      "Using YOLOv3 and OpenCV for object detection and classification in a video stream. DeepSORT was used for object tracking to assign a unique id for each detected object to count.",
    image: "/img/cards/yolo.png",
    href: "https://youtu.be/HV7dPHIIWuA",
    tags: ["Computer Vision", "Python"],
  },
  {
    title: "Daftar Jumaat",
    description:
      "A web app to allow muslims to reserve their slot for Jumaat prayer. The SOPs are being enforced by the government to limit the capacity allowed in mosques during the prayer.",
    image: "/img/cards/daftarjumaat.jpg",
    tags: ["Laravel", "PHP", "Web Development"],
  },
  {
    title: "FoodBear Delivery System",
    description:
      "An individual project for Workshop 1 subject at UTeM and as a terminal-based application. This is a food delivery system that allows users to order food and get it delivered to their doorstep.",
    image: "/img/cards/foodbear.png",
    tags: ["C++"],
  },
];
</script>

<style scoped>
.projects-section {
  padding-block: 2rem 6rem;
  scroll-margin-top: 2rem;
}

.section-intro {
  display: grid;
  gap: 1.5rem;
  align-items: end;
  padding-bottom: 2.25rem;
  border-bottom: 1px solid var(--line);
}

.section-copy {
  margin: 0;
}

.project-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.project-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 1.35rem;
  background: linear-gradient(
    145deg,
    rgba(31, 41, 55, 0.78),
    rgba(15, 23, 42, 0.66)
  );
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.16);
  color: inherit;
  text-decoration: none;
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

a.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(181, 192, 255, 0.32);
  box-shadow: 0 30px 65px rgba(0, 0, 0, 0.25);
}

.image-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #111827;
}

.image-wrap::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.45), transparent 55%);
  content: "";
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

a.project-card:hover img {
  transform: scale(1.035);
}

.project-number,
.project-link {
  position: absolute;
  z-index: 2;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(15, 23, 42, 0.68);
  color: #eef2ff;
  backdrop-filter: blur(10px);
}

.project-number {
  bottom: 0.8rem;
  left: 0.8rem;
  min-width: 2.2rem;
  height: 1.8rem;
  padding-inline: 0.5rem;
  border-radius: 999px;
  font-family: "Manrope", sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
}

.project-link {
  top: 0.8rem;
  right: 0.8rem;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 0.75rem;
  transition:
    transform 180ms ease,
    background 180ms ease;
}

a.project-card:hover .project-link {
  transform: rotate(6deg);
  background: rgba(139, 156, 255, 0.28);
}

.project-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.35rem;
}

.project-content h3 {
  margin: 0;
  color: #f8fafc;
  font-size: 1.18rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.project-note {
  display: inline-block;
  margin-top: 0.2rem;
  color: #7f8da3;
  font-size: 0.68rem;
  font-weight: 600;
}

.project-content p {
  margin: 0.85rem 0 1.25rem;
  color: #aab7ca;
  font-size: 0.86rem;
  line-height: 1.72;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: auto 0 0;
  padding: 0;
  list-style: none;
}

.tags li {
  padding: 0.34rem 0.55rem;
  border: 1px solid rgba(139, 156, 255, 0.13);
  border-radius: 999px;
  background: rgba(139, 156, 255, 0.07);
  color: #b9c3d5;
  font-size: 0.63rem;
  font-weight: 600;
}

@media (min-width: 680px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 900px) {
  .projects-section {
    padding-block: 3rem 8rem;
  }
  .section-intro {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  .section-copy {
    justify-self: end;
  }
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .project-card.featured {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(16rem, 0.8fr);
    grid-column: 1 / -1;
  }
  .project-card.featured .image-wrap {
    height: 100%;
    aspect-ratio: auto;
    min-height: 23rem;
  }
  .project-card.featured .project-content {
    padding: 2rem;
    justify-content: center;
  }
  .project-card.featured .project-content h3 {
    font-size: 1.55rem;
  }
  .project-card.featured .project-content p {
    font-size: 0.93rem;
  }
}
</style>
