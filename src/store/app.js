import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        commandsActionMap: null,
        client: null,
        vc: false,
        connection: null
    }),

    getters: {},

    actions: {},
});