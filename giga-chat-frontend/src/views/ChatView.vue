<template>
  <input v-model="txtRoomListener" placeholder="Enter room name" /> <br />
  <button @click="listenToRoom">Connect</button>

  <div>
    <div v-for="(chat, index) in chatStore.chats" v-bind:key="index">
      {{ chat.text }}
    </div>
  </div>
  <input v-model="txtChatInput" placeholder="Enter chat" /> <br />
  <input v-model="txtRoomInput" placeholder="Enter room" /> <br />
  <button @click="sendChat">Send</button>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtChatInput = ref("");
const txtRoomInput = ref("");
const txtRoomListener = ref("");

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
}

function sendChat() {
  chatStore.createChat({ text: txtChatInput.value, room: txtRoomInput.value });
}
</script>

<style scoped></style>
