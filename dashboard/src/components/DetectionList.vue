<template>
  <section>
    <div class="section-header">
      <h2>Recent Detections</h2>
      <span class="count">{{ detections.length }} shown</span>
    </div>

    <div v-if="!detections.length" class="empty-state">
      No detections available.
    </div>

    <div v-else class="detection-list">
      <DetectionCard
          v-for="detection in detections"
          :key="detection.id"
          :detection="detection"
      />
    </div>
  </section>
</template>

<script setup>
import DetectionCard from "./DetectionCard.vue";

defineProps({
  detections: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

h2 {
  margin: 0;
}

.count {
  color: #666;
  font-size: 0.95rem;
}

.detection-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.empty-state {
  background: #ffffff;
  border: 1px dashed #cccccc;
  border-radius: 14px;
  padding: 1.5rem;
  color: #666;
}
</style>