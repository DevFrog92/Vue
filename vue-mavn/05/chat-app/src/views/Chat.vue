<template>
  <section class="container">
    <div class="card">
      <h4>여행에 대한 이야기</h4>
      <div class="card-content" id="cdContent">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <i>person icon</i>
            <span>
              {{ message.name }}
              <p>
                {{ message.content }} <br />
                <span>{{ message.timestamp }}</span>
              </p>
            </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </section>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import { app } from '@/firebaseinit.js';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore/lite';

import { onSnapshot, doc } from 'firebase/firestore';

import moment from 'moment';

export default {
  components: {
    NewMessage,
  },
  props: ['name'],
  data() {
    return {
      messages: [],
    };
  },
  async created() {
    try {
      const db = getFirestore(app);
      // let ref = collection(db, 'messages');
      // let query = orderBy(ref, 'timestamp');
      // const sortedDocs = query(ref, orderBy('timestamp'));
      // const docs = await getDocs(sortedDocs);
      console.log(doc(db, 'messages', 'SF'));
      // let refSnapshot = onSnapshot(doc(db, 'messages', 'SF'), docs => {
      //   console.log(docs.data());
      // });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
