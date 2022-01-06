import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/Login'
import Room from './modules/Room'
import Calendar from './modules/Calendar'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        Login: Login,
        Room: Room,
        Calendar: Calendar
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})