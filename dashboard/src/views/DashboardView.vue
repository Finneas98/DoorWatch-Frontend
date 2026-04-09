<template>
  <main class="dashboard-page">
    <DashboardHeader
        :device-name="settings.deviceName"
        :status="settings.status"
        :mode="settings.mode"
    />

    <SummaryCards :summary="summary" />

    <DetectionList :detections="detections" />
  </main>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import DashboardHeader from "../components/DashboardHeader.vue";
import SummaryCards from "../components/SummaryCards.vue";
import DetectionList from "../components/DetectionList.vue";
import { getRecentDetections } from "../services/detectionService";
import { getTodaySummary } from "../services/analyticsService";
import { getDeviceSettings } from "../services/settingsService";

const detections = ref([]);

const summary = reactive({
  totalDetections: 0,
  averageTemperature: 0,
  averageHumidity: 0,
  securityDetections: 0,
  visitorDetections: 0
});

const settings = reactive({
  deviceName: "DoorWatch Main Entrance",
  mode: "visitor",
  status: "offline",
  emailAlertsEnabled: false,
  securityAlarmEnabled: false
});

onMounted(async () => {
  try {
    const [recentDetections, todaySummary, deviceSettings] = await Promise.all([
      getRecentDetections(),
      getTodaySummary(),
      getDeviceSettings()
    ]);

    detections.value = recentDetections;

    Object.assign(summary, todaySummary);
    Object.assign(settings, deviceSettings);
  } catch (error) {
    console.error("Failed to load dashboard data:", error);
  }
});
</script>

<style scoped>
.dashboard-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
}
</style>