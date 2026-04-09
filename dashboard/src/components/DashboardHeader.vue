<template>
  <header class="dashboard-header">
    <div>
      <h1>DoorWatch Dashboard</h1>
      <p class="subtitle">{{ deviceName }}</p>
    </div>

    <div class="status-group">
      <span class="status-pill" :class="statusClass">
        {{ statusLabel }}
      </span>
      <span class="mode-pill">
        Mode: {{ formattedMode }}
      </span>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  deviceName: {
    type: String,
    default: "DoorWatch"
  },
  status: {
    type: String,
    default: "offline"
  },
  mode: {
    type: String,
    default: "visitor"
  }
});

const statusClass = computed(() =>
    props.status === "online" ? "online" : "offline"
);

const statusLabel = computed(() =>
    props.status === "online" ? "Online" : "Offline"
);

const formattedMode = computed(() =>
    props.mode.charAt(0).toUpperCase() + props.mode.slice(1)
);
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: #666;
}

.status-group {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.status-pill,
.mode-pill {
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
}

.status-pill.online {
  background: #dff6e8;
  color: #17663a;
}

.status-pill.offline {
  background: #fbe4e6;
  color: #8a1f2d;
}

.mode-pill {
  background: #eef2ff;
  color: #2c3e91;
}
</style>