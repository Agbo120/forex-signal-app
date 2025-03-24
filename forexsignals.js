// 📌 ForexSignals.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

const ForexSignals = () => {
  const [signals, setSignals] = useState([]);
  const [currencyPair, setCurrencyPair] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");

  // 🔹 Fetch Forex Signals from Firestore
  useEffect(() => {
    const fetchSignals = async () => {
      const signalsCollection = collection(db, "forex_signals");
      const signalSnapshot = await getDocs(signalsCollection);
      const signalList = signalSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSignals(signalList);
    };

    fetchSignals();
  }, []);

  // 🔹 Add a New Forex Signal to Firestore
  const addSignal = async () => {
    if (!currencyPair || !entryPrice || !stopLoss || !takeProfit) {
      alert("Please fill all fields.");
      return;
    }

    await addDoc(collection(db, "forex_signals"), {
      currencyPair,
      entryPrice,
      stopLoss,
      takeProfit,
      timestamp: serverTimestamp(),
    });

    alert("Signal added successfully!");
    setCurrencyPair("");
    setEntryPrice("");
    setStopLoss("");
    setTakeProfit("");
  };

  return (
    <div>
      <h2>📈 Add Forex Signal</h2>
      <input type="text" placeholder="Currency Pair (e.g., EUR/USD)" value={currencyPair} onChange={(e) => setCurrencyPair(e.target.value)} />
      <input type="number" placeholder="Entry Price" value={entryPrice} onChange={(e) => setEntryPrice(e.target.value)} />
      <input type="number" placeholder="Stop Loss" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} />
      <input type="number" placeholder="Take Profit" value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} />
      <button onClick={addSignal}>➕ Add Signal</button>

      <h2>📊 Forex Signal List</h2>
      <ul>
        {signals.map((signal) => (
          <li key={signal.id}>
            <strong>{signal.currencyPair}</strong> - Entry: {signal.entryPrice}, SL: {signal.stopLoss}, TP: {signal.takeProfit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForexSignals;
