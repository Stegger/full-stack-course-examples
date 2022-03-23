<template>
  <h2>Get a room</h2>
  <input v-model="txtRoomListener" placeholder="Enter room name" /> <br />
  <button @click="listenToRoom">Connect</button>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";
import router from "@/router";

const chatStore = ChatStore();

const txtRoomListener = ref("");

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
  router.push("/chat");
}
</script>

<style scoped></style>
