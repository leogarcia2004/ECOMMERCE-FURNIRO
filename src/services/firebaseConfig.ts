
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC-8S2TWQ4L2a-QrgxgzDO1ZdJkLhThHA",
  authDomain: "ecommerce-furniro.firebaseapp.com",
  projectId: "ecommerce-furniro",
  storageBucket: "ecommerce-furniro.appspot.com",
  messagingSenderId: "1049010898952",
  appId: "1:1049010898952:web:19de2058ff13e6542569bd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);