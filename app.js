import { getSignals } from "./firebase.js";

getSignals()
  .then(signals => {
    console.log("📊 Forex Signals:", signals);
  })
  .catch(error => {
    console.error("❌ Error fetching signals:", error);
  });


