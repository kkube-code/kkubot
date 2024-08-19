import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        commandsActionMap: null,
        client: null,
        vc: false,
        connections: [],
        err: false,
        ver: process.env.VERSION,
        devlist: ['kkube_coding_tw','command_cat'],
        music_queue: []
    }),

    getters: {},

    actions: {},
});