import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// 🔥 Replace these values with your Firebase project config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAnGdQVRgfnHw-29yN6I8TYCcGLACYEuCY",
    authDomain: "forex-signal-app-ff3e5.firebaseapp.com",
    projectId: "forex-signal-app-ff3e5",
    storageBucket: "forex-signal-app-ff3e5.firebasestorage.app",
    messagingSenderId: "1087788926620",
    appId: "1:1087788926620:web:9b60da24ff11569e9f0f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch Forex signals
export async function getSignals() {
    const querySnapshot = await getDocs(collection(db, "forex-signal"));
    let signals = [];

    querySnapshot.forEach((doc) => {
        let data = doc.data();

        // Convert Firestore Timestamp to a readable date
        if (data.timestamp) {
            data.timestamp = data.timestamp.toDate().toLocaleString();
        }

        signals.push(data);
    });

    return signals;
}
