<template>
  <section class="summary-grid">
    <article class="summary-card">
      <h3>Detections Today</h3>
      <p>{{ summary.totalDetections }}</p>
    </article>

    <article class="summary-card">
      <h3>Avg Temperature</h3>
      <p>{{ formatTemperature(summary.averageTemperature) }}</p>
    </article>

    <article class="summary-card">
      <h3>Avg Humidity</h3>
      <p>{{ formatHumidity(summary.averageHumidity) }}</p>
    </article>

    <article class="summary-card">
      <h3>Security Detections</h3>
      <p>{{ summary.securityDetections }}</p>
    </article>
  </section>
</template>

<script setup>
defineProps({
  summary: {
    type: Object,
    required: true
  }
});

function formatTemperature(value) {
  return `${Number(value || 0).toFixed(1)}°C`;
}

function formatHumidity(value) {
  return `${Number(value || 0).toFixed(1)}%`;
}
</script>

<style scoped>
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.summary-card h3 {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  color: #666;
}

.summary-card p {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
}
</style>