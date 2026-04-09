import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const DEVICE_ID = "doorwatch-main";

export async function getDeviceSettings() {
    const settingsRef = doc(db, "devices", DEVICE_ID, "settings", "config");
    const snapshot = await getDoc(settingsRef);

    if (!snapshot.exists()) {
        return {
            deviceName: "DoorWatch Main Entrance",
            mode: "visitor",
            status: "offline",
            emailAlertsEnabled: false,
            securityAlarmEnabled: false
        };
    }

    return snapshot.data();
}