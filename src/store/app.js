import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        commandsActionMap: null,
        client: null,
        vc: false,
        connection: null,
        err: false,
        ver: process.env.VERSION,
        devlist: ['kkube_coding_tw','command_cat']
    }),

    getters: {},

    actions: {},
});