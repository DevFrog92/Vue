import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const config = {
  apiKey: 'AIzaSyAeaQN2isscdHhQeF7hulJ2E8iURp7-loM',
  authDomain: 'vue-chat-f9ada.firebaseapp.com',
  projectId: 'vue-chat-f9ada',
  storageBucket: 'vue-chat-f9ada.appspot.com',
  messagingSenderId: '692323934142',
  appId: '1:692323934142:web:1b2270d41d61c7bfdfe3ef',
};

export const app = initializeApp(config);
export const db = getFirestore(app);
