<template>
  <article class="detection-card">
    <img
        class="thumbnail"
        :src="detection.imageUrl || fallbackImage"
        alt="Detection thumbnail"
    />

    <div class="details">
      <div class="top-row">
        <h4>{{ formattedTimestamp }}</h4>
        <span class="mode-badge" :class="detection.mode">
          {{ formattedMode }}
        </span>
      </div>

      <p>Temperature: {{ formatTemperature(detection.temperature) }}</p>
      <p>Humidity: {{ formatHumidity(detection.humidity) }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  detection: {
    type: Object,
    required: true
  }
});

const fallbackImage = "https://via.placeholder.com/120x90?text=No+Image";

const formattedTimestamp = computed(() => {
  const raw = props.detection.timestamp || props.detection.createdAt;

  if (!raw) return "Unknown time";

  let date;

  if (typeof raw === "string") {
    date = new Date(raw);
  } else if (raw?.seconds) {
    date = new Date(raw.seconds * 1000);
  } else {
    date = new Date(raw);
  }

  return date.toLocaleString();
});

const formattedMode = computed(() => {
  const mode = props.detection.mode || "visitor";
  return mode.charAt(0).toUpperCase() + mode.slice(1);
});

function formatTemperature(value) {
  return `${Number(value || 0).toFixed(1)}°C`;
}

function formatHumidity(value) {
  return `${Number(value || 0).toFixed(1)}%`;
}
</script>

<style scoped>
.detection-card {
  display: flex;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 14px;
  padding: 1rem;
  align-items: center;
}

.thumbnail {
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  background: #f1f1f1;
}

.details {
  flex: 1;
}

.top-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

h4 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

p {
  margin: 0.25rem 0;
  color: #444;
}

.mode-badge {
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.mode-badge.visitor {
  background: #eef2ff;
  color: #2c3e91;
}

.mode-badge.security {
  background: #fde8e8;
  color: #a12828;
}
</style>