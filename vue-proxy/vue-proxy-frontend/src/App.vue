<template>
  <div id="app">main</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  created() {
    // 1. 브라우저에서 직접 요청
    this.corsRequest();

    // 2. 개발 서버를 이용해서 프록시 요청
    this.proxyRequest();
  },
  methods: {
    corsRequest() {
      axios
        .get('http://localhost:3000/api/getList')
        .then((res) => {
          console.log('corsRequest res', res);
        })
        .catch((error) => {
          console.log('corsRequest error', error);
        });
    },
    proxyRequest() {
      axios
        .get('/api/getList')
        .then((res) => {
          console.log('proxyRequest res', res);
        })
        .catch((error) => {
          console.log('proxyRequest error', error);
        });
    },
  },
};
</script>
