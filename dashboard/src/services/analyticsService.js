import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const DEVICE_ID = "doorwatch-main";

function getDateKey(date = new Date()) {
    return date.toISOString().split("T")[0];
}

export async function getTodaySummary() {
    const dateKey = getDateKey();

    const summaryRef = doc(
        db,
        "devices",
        DEVICE_ID,
        "analytics",
        `daily_summary_${dateKey}`
    );

    const snapshot = await getDoc(summaryRef);

    if (!snapshot.exists()) {
        return {
            totalDetections: 0,
            averageTemperature: 0,
            averageHumidity: 0,
            securityDetections: 0,
            visitorDetections: 0
        };
    }

    return snapshot.data();
}