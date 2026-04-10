import {
    collection,
    getDocs,
    limit,
    orderBy,
    query
} from "firebase/firestore";
import { db } from "./firebase";

const DEVICE_ID = "doorwatch-main";

export async function getRecentDetections() {
    const detectionsRef = collection(db, "devices", DEVICE_ID, "detections");
    const q = query(detectionsRef, orderBy("createdAt", "desc"), limit(10));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
}