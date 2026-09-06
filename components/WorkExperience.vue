<template>
  <section aria-labelledby="work-heading">
    <p class="eyebrow">Career</p>
    <h2 id="work-heading" class="display-font timeline-heading">
      Working Experience
    </h2>

    <ol class="timeline">
      <li v-for="(item, index) in work" :key="item.company + item.duration">
        <div class="timeline-marker">
          <span>{{ String(index + 1).padStart(2, "0") }}</span>
        </div>
        <div class="timeline-card">
          <div class="role-row">
            <div>
              <p class="label">Position</p>
              <h3 class="display-font">{{ item.position }}</h3>
            </div>
            <span class="duration">{{ item.duration }}</span>
          </div>
          <p class="label company-label">Company</p>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noreferrer"
            class="company"
            >{{ item.company }} <span aria-hidden="true">↗</span></a
          >
          <span v-else class="company">{{ item.company }}</span>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import work from "@/assets/work.json";
</script>

<style scoped>
.timeline-heading {
  margin: 0.65rem 0 2rem;
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  letter-spacing: -0.045em;
}
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}
.timeline li {
  position: relative;
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem;
  padding-bottom: 1rem;
}
.timeline li:not(:last-child)::before {
  position: absolute;
  top: 2.35rem;
  bottom: -0.15rem;
  left: 1.22rem;
  width: 1px;
  background: var(--line);
  content: "";
}
.timeline-marker {
  position: relative;
  z-index: 1;
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 1px solid rgba(181, 192, 255, 0.25);
  border-radius: 50%;
  background: #172033;
}
.timeline-marker span {
  color: var(--accent-bright);
  font-size: 0.62rem;
  font-weight: 700;
}
.timeline-card {
  padding: 1.15rem;
  border: 1px solid var(--line);
  border-radius: 1.2rem;
  background: rgba(31, 41, 55, 0.48);
}
.role-row {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.label {
  margin: 0 0 0.3rem;
  color: #718096;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.timeline-card h3 {
  margin: 0;
  color: #f4f7fb;
  font-size: 1rem;
  line-height: 1.35;
}
.duration {
  width: max-content;
  padding: 0.34rem 0.55rem;
  border-radius: 999px;
  background: rgba(139, 156, 255, 0.09);
  color: #b8c2d5;
  font-size: 0.66rem;
  font-weight: 600;
}
.company-label {
  margin-top: 1.15rem;
}
.company {
  color: #cbd5e1;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
}
a.company:hover {
  color: var(--accent-bright);
}

@media (min-width: 600px) {
  .timeline li {
    grid-template-columns: 3rem minmax(0, 1fr);
    gap: 1.25rem;
  }
  .timeline li:not(:last-child)::before {
    left: 1.47rem;
  }
  .timeline-marker {
    width: 3rem;
    height: 3rem;
  }
  .timeline-card {
    padding: 1.4rem;
  }
  .role-row {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
  .duration {
    flex: 0 0 auto;
  }
}
</style>
