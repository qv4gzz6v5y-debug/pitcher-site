import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4vxfTrybnA6fUtV5Ykrz371ZBus-L-RM",
  authDomain: "pitcher-site.firebaseapp.com",
  projectId: "pitcher-site",
  storageBucket: "pitcher-site.firebasestorage.app",
  messagingSenderId: "522000011066",
  appId: "1:522000011066:web:1e41439a5a1fef29cbca03"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
