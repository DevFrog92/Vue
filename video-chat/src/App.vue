<template>
  <div id="app">
    <navigation :user="user" @logout="logout"></navigation>
    <router-view
      :user="user"
      :rooms="rooms"
      @logout="logout"
      @addRoom="addRoom"
      @deleteRoom="deleteRoom"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import db from "@/db.js";
import FireBase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",
  data() {
    return {
      user: null,
      rooms: [],
    };
  },
  methods: {
    logout() {
      FireBase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/login");
        });
    },
    addRoom(roomName) {
      db.collection("users").doc(this.user.uid).collection("rooms").add({
        name: roomName,
        createdAt: FireBase.firestore.FieldValue.serverTimestamp(),
      });
    },
    deleteRoom(roomId) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("rooms")
        .doc(roomId)
        .delete();
    },
  },
  components: {
    Navigation,
  },
  mounted() {
    FireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
        console.log("id", this.user.id);

        db.collection("users")
          .doc(this.user.uid)
          .collection("rooms")
          .onSnapshot((snapShot) => {
            const snapData = [];
            snapShot.forEach((doc) => {
              snapData.push({
                id: doc.id,
                name: doc.data().name,
              });
            });
            console.log("snapData", snapData);
            this.rooms = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else {
                return 1;
              }
            });
            console.log(this.rooms);
          });
      }
    });
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>