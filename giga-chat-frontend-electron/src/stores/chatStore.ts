import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";
import { ChatService } from "@/services/chat.service";

const chatService = new ChatService();

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [{ text: "First chat" }, { text: "Second chat" }] as Chat[],
    room: "",
    userName: "",
  }),
  actions: {
    createChat(text: string) {
      const chat: Chat = { text: text, room: this.room };
      chatService.createChat(chat);
      this.chats.push(chat);
    },
    receiveChat(chat: Chat) {
      this.chats.push(chat);
    },
    setRoom(room: string) {
      if (this.room) chatService.disconnectFromRoom(this.room);
      this.room = room;
      chatService.listenToRoom(room, (chat) => {
        this.chats.push(chat);
      });
    },
  },
});
