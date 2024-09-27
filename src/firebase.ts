import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.

const firebaseConfig = {
  apiKey: "AIzaSyDLn2xYBxkEmCdjBvOnPwspBHdTKv30IS4",
  authDomain: "mobile-invitation-96894.firebaseapp.com",
  databaseURL: "https://mobile-invitation-96894-default-rtdb.firebaseio.com",
  projectId: "mobile-invitation-96894",
  storageBucket: "mobile-invitation-96894.appspot.com",
  messagingSenderId: "903089448813",
  appId: "1:903089448813:web:fc35a580005ddc17135c64",
  measurementId: "G-W5JRYR2B1L"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
