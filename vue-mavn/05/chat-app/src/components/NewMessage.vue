<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <input type="text" v-model="newMessage" />
    </form>
  </div>
</template>

<script>
import { app } from '@/firebaseinit.js';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

export default {
  props: ['name'],
  data() {
    return {
      newMessage: null,
    };
  },
  methods: {
    async addMessage() {
      if (this.newMessage !== null) {
        try {
          const db = getFirestore(app);
          const ref = collection(db, 'messages');
          const response = await addDoc(ref, {
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          });

          console.log('response', response);
        } catch (error) {
          console.log('error', error);
        }

        this.newMessage = null;
      }
    },
  },
};
</script>

<style></style>
