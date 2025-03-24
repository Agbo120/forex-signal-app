// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

// Firebase configuration (Make sure your security rules are set properly)
const firebaseConfig = {
    apiKey: "AIzaSyAnGdQVRgfnHw-29yN6I8TYCcGLACYEuCY",
    authDomain: "forex-signal-app-ff3e5.firebaseapp.com",
    projectId: "forex-signal-app-ff3e5",
    storageBucket: "forex-signal-app-ff3e5.appspot.com",  // Fixed URL format
    messagingSenderId: "1087788926620",
    appId: "1:1087788926620:web:9b60da24ff11569e9f0f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save Forex signals to Firestore
export async function saveSignal(pair, signal) {
    try {
        await addDoc(collection(db, "forex-signals"), {
            pair: pair,
            signal: signal,
            timestamp: Timestamp.now() // Stores timestamp correctly
        });
        console.log("Signal saved successfully!");
    } catch (error) {
        console.error("Error saving signal:", error);
    }
}

// Function to fetch Forex signals from Firestore
export async function getSignals() {
    try {
        const querySnapshot = await getDocs(collection(db, "forex-signal"));
        let signals = [];

        querySnapshot.forEach((doc) => {
            let data = doc.data();

            // Convert Firestore Timestamp to readable date
            if (data.timestamp) {
                data.timestamp = data.timestamp.toDate().toLocaleString();
            }

            signals.push(data);
        });

        return signals;
    } catch (error) {
        console.error("Error fetching signals:", error);
        return [];
    }
}

// Export Firestore database
export { db };
