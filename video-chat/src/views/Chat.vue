<template>
  <div class="container-fluid mt-4">
    <div class="mb-3">
      <span class="mb-0 h2 text-primary">{{ roomName }}</span>
      <span class="ml-1" v-if="user && user.uid !== hostId">
        Hosted by: <strong class="text-danger">{{ hostDisplayName }}</strong>
      </span>
    </div>
    <div class="row" v-if="(user && user.uid == hostId) || attendeeApproved">
      <div class="col-md-8">
        <vue-webrtc ref="webrtc"
                      width="100%"
                      :roomId="roomId"
                      v-on:joined-room="logEvent"
                      v-on:left-room="logEvent"
                      v-on:opened-room="logEvent"
                      v-on:share-started="logEvent"
                      v-on:share-stopped="logEvent"
                      @error="onError" />
      </div>
      <div class="col-md-4">
         <button type="button" class="btn btn-primary" @click="onJoin">Join</button>
            <button type="button" class="btn btn-primary" @click="onLeave">Leave</button>
            <button type="button" class="btn btn-primary" @click="onCapture">Capture Photo</button>
            <button type="button" class="btn btn-primary" @click="onShareScreen">Share Screen</button>
        <button
          v-if="!attendeeJoined && attendeeApproved"
          class="btn btn-primary mr-1"
          @click="doJoin"
        >
          Join
        </button>
        <button
          v-if="attendeeJoined"
          type="button"
          class="btn btn-danger mr-1"
          @click="doLeave"
        >
          Leave
        </button>
        <h4 class="mt-2">Attendees</h4>
        <ul class="list-unstyled">
          <li v-for="attendee in attendeesApprovedArr" :key="attendee.id">
            <a
              type="button"
              class="mr-2"
              title="Approve attendee"
              @click="toggleApproval(attendee.id)"
              v-if="user && user.uid == hostId"
            >
              <font-awesome-icon icon="user"></font-awesome-icon>
            </a>
            <span
              class="mr-2"
              :class="[attendee.webRTCID ? 'text-success' : 'text-secondary']"
              title="On Air"
            >
              <font-awesome-icon icon="podcast"></font-awesome-icon>
            </span>
            <span></span>
            <span
              class="pl-1"
              :class="[
                attendee.id == user.uid ? 'font-weight-bold text-danger' : '',
              ]"
              >{{ attendee.displayName }}</span
            >
          </li>
        </ul>
        <div v-if="user && user.uid == hostId">
          <h5 class="mt-4">Pending</h5>
          <ul class="list-unstyled">
            <li
              class="mb-1"
              v-for="attendee in attendeesPendingArr"
              :key="attendee.id"
            >
              <span>
                <a
                  type="button"
                  class="mr-2"
                  title="Approve attendee"
                  @click="toggleApproval(attendee.id)"
                >
                  <font-awesome-icon icon="user"></font-awesome-icon>
                </a>
                <a
                  type="button"
                  class="text-secondary pr-1"
                  title="Delete Attendee"
                  @click="deleteAttendee(attendee.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </a>
              </span>
              <span class="pl-1">{{ attendee.displayName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="lead">
        Hi
        <strong class="text-primary font-weight-bold">{{
          user.displayName
        }}</strong
        >, you're currently in the room waiting for the owner of the chat to add
        you to the meeting. Please wait.
      </p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Firebase from "firebase";
import db from "../db";
export default {
  data: function () {
    return {
      hostId: this.$route.params.hostID,
      roomId: this.$route.params.roomID,
      roomName: null,
      hostDisplayName: null,
      attendeesPendingArr: [],
      attendeesApprovedArr: [],
      attendeeApproved: false,
      attendeeJoined: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    log(event){
      console.log('log',event)
    },
    toggleApproval: function (attendeeID) {
      if (this.user && this.user.uid == this.hostId) {
        const ref = db
          .collection("users")
          .doc(this.user.uid)
          .collection("rooms")
          .doc(this.roomId)
          .collection("attendees")
          .doc(attendeeID);

        ref.get().then((attendeeDoc) => {
          const approved = attendeeDoc.data().approved;
          console.log("approved", approved);
          if (approved) {
            ref.update({
              approved: !approved,
            });
          } else {
            ref.update({
              approved: true,
            });
          }
        });
      }
    },
    deleteAttendee: function (attendeeID) {
      if (this.user && this.user.uid == this.hostId) {
        db.collection("users")
          .doc(this.user.uid)
          .collection("rooms")
          .doc(this.roomId)
          .collection("attendees")
          .doc(attendeeID)
          .delete();
      }
    },
    doJoin() {
      console.log('do join',document.querySelector('.video-list').join())
      console.log('web rtc', this.$refs.webrtc.join())
      this.$refs.webrtc.join()
      this.attendeeJoined = true;
      
    },
    doLeave() {
      this.$refs.webrtc.leave();
      this.attendeeJoined = false;
    },
    doAttendeeJoined(joinID) {
      console.log("join");
      const ref = db
        .collection("users")
        .doc(this.hostId)
        .collection("rooms")
        .doc(this.roomId)
        .collection("attendees")
        .doc(this.user.uid);
      ref.update({
        webRTCID: joinID,
      });
    },
    doAttendeeLeft(leftID) {
      console.log("left");
      const ref = db
        .collection("users")
        .doc(this.hostId)
        .collection("rooms")
        .doc(this.roomId)
        .collection("attendees")
        .doc(this.user.uid);
      ref.update({
        webRTCID: null,
      });
    },
    // 
    onCapture() {
        this.img = this.$refs.webrtc.capture();
      },
      onJoin() {
        this.$refs.webrtc.join();
        console.log('join')
      },
      onLeave() {
        this.$refs.webrtc.leave();
        console.log('leave')

      },
      onShareScreen() {
        this.img = this.$refs.webrtc.shareScreen();
      },
      onError(error, stream) {
        console.log('On Error Event', error, stream);
      },
      logEvent(event) {
        console.log('Event : ', event);
      },
  },
  props: ["user"],
  mounted() {
    const roomRef = db
      .collection("users")
      .doc(this.$route.params.hostID)
      .collection("rooms")
      .doc(this.$route.params.roomID);
    //Get Room Name
    roomRef.get().then((roomDoc) => {
      if (roomDoc.exists) this.roomName = roomDoc.data().name;
      else this.$router.push("/");
    });
    //Get Host Name
    roomRef.collection("attendees").onSnapshot((snapShot) => {
      let userCheckedIn = false;
      let tempPendeing = [];
      let tempApproved = [];
      snapShot.forEach((attendeeDoc) => {
        //Host Display Name
        if (this.hostId === attendeeDoc.id) {
          this.hostDisplayName = attendeeDoc.data().displayName;
        }
        //Cheking If User Checked In
        if (this.user && this.user.uid == attendeeDoc.id) {
          userCheckedIn = true;
        }
        //Push all users that are approved to the approved arr.
        if (attendeeDoc.data().approved) {
          if (this.user.uid == attendeeDoc.id) {
            this.attendeeApproved = true;
          }
          tempApproved.push({
            id: attendeeDoc.id,
            displayName: attendeeDoc.data().displayName,
            approved: attendeeDoc.data().approved,
            webRTCID: attendeeDoc.data().webRTCID,
          });
        } else {
          //Push all users that are NOT approved to the pending arr.
          if (this.user.uid == attendeeDoc.id) {
            this.attendeeApproved = false;
          }
          tempPendeing.push({
            id: attendeeDoc.id,
            displayName: attendeeDoc.data().displayName,
            approved: attendeeDoc.data().approved,
            webRTCID: attendeeDoc.data().webRTCID,
          });
        }
      });
      if (!userCheckedIn) {
        this.$router.push(`/checkin/${this.hostId}/${this.roomId}`);
      }
      this.attendeesPendingArr = tempPendeing;
      this.attendeesApprovedArr = tempApproved;
    });
  },
};
</script>

<style lang="scss">
.video-list {
  margin-bottom: 10px;
  background: transparent !important;
}
.video-item {
  width: 50%;
  display: inline-block;
  background: transparent !important;
}
.video-item video {
  width: 100%;
  height: auto;
}
</style>