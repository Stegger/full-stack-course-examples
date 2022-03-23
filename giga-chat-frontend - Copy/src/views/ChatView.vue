<template>
  <div class="relative">
    <!-- ScrollPanel -->
    <div class="container mx-auto px-5 static overflow-y-auto">
      <!-- Chat Element -->
      <div v-for="(chat, index) in chatStore.chats" v-bind:key="index">
        {{ chat.text }}
      </div>
    </div>
    <div class="absolute bottom-5 left-5 right-5">
      <input v-model="txtChatInput" placeholder="Enter chat" /> <br />
      <button @click="sendChat">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtChatInput = ref("");

function sendChat() {
  chatStore.createChat(txtChatInput.value);
}
</script>

<style scoped></style>
