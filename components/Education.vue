<template>
  <section aria-labelledby="education-heading">
    <p class="eyebrow">Academic</p>
    <h2 id="education-heading" class="display-font section-title">Education</h2>

    <div class="education-list">
      <article
        v-for="item in education"
        :key="item.period"
        class="education-card"
      >
        <span class="period">{{ item.period }}</span>
        <div>
          <p class="type">{{ item.type }}</p>
          <h3 class="display-font">{{ item.qualification }}</h3>
          <a v-if="item.link" :href="item.link" target="_blank" rel="noreferrer"
            >{{ item.institution }} <span aria-hidden="true">↗</span></a
          >
          <p v-else class="institution">{{ item.institution }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const education = [
  {
    type: "Degree",
    qualification: "Bachelor of Computer Science (Software Development)",
    institution: "Universiti Teknikal Malaysia Melaka (UTeM)",
    period: "2020 - 2024",
    link: "https://www.utem.edu.my/en/",
  },
  {
    type: "Matriculation",
    qualification: "Sijil Matrikulasi (Module 2)",
    institution: "Kolej Matrikulasi Selangor",
    period: "2019 - 2020",
    link: "https://www.facebook.com/KMSgemilang/",
  },
  {
    type: "Secondary School",
    qualification: "Sijil Pelajaran Malaysia",
    institution: "SMK Jalan Kebun, Shah Alam, Selangor",
    period: "2013 - 2018",
  },
];
</script>

<style scoped>
.section-title {
  margin: 0.65rem 0 2rem;
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  letter-spacing: -0.045em;
}
.education-list {
  display: grid;
  gap: 0.8rem;
}
.education-card {
  display: grid;
  gap: 1rem;
  padding: 1.2rem;
  border: 1px solid var(--line);
  border-radius: 1.2rem;
  background: rgba(31, 41, 55, 0.48);
}
.period {
  width: max-content;
  height: max-content;
  padding: 0.38rem 0.6rem;
  border-radius: 999px;
  background: rgba(103, 232, 249, 0.07);
  color: #a5dce5;
  font-size: 0.67rem;
  font-weight: 600;
}
.type {
  margin: 0 0 0.35rem;
  color: #718096;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.education-card h3 {
  margin: 0;
  color: #f4f7fb;
  font-size: 1rem;
  line-height: 1.5;
}
.education-card a,
.institution {
  display: inline-block;
  margin: 0.65rem 0 0;
  color: #aebbcf;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
}
.education-card a:hover {
  color: var(--accent-bright);
}

@media (min-width: 600px) {
  .education-card {
    grid-template-columns: 7rem minmax(0, 1fr);
    gap: 1.5rem;
    padding: 1.4rem;
  }
}
</style>
