import {doc, getDoc, updateDoc} from "firebase/firestore";
import { db } from "./firebase";

const DEVICE_ID = "doorwatch-main";
const settingsRef = doc(db, "devices", DEVICE_ID, "settings", "config");

export async function getDeviceSettings() {
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

export async function updateDeviceMode(newMode) {
    await updateDoc(settingsRef, {
        mode: newMode
    });
}