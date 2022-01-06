import Vue from "vue"
import Router from 'vue-router'
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"
import Home from "../components/Home.vue"
import RoomHome from "../components/RoomHome.vue"
import RoomCreate from "../components/RoomCreate.vue"
import Invite from '../components/Invite.vue'
import AddRoom from '../components/AddRoom.vue'
import Calendar from '../components/Calendar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/room/:id',
            name: 'Home',
            component: Home,
            props: true
        },
        {
            path: '/roomhome/:id',
            name: 'RoomHome',
            component: RoomHome,
            props: true,

            children: [
                {
                    path: 'invite', component: Invite
                },
            ]
        },
        {
            path: '/calendar/:id',
            name: 'Calendar',
            component: Calendar,
            props: true
        },
        {
            path: '/roomhome/:id/invite',
            name: 'Invite',
            component: Invite,
            props: true,
          },
        {
            path: '/create',
            name: 'roomcreate',
            component: RoomCreate,
        },
        {
            path: '/room/n/:token',
            name: 'AddRoom',
            component: AddRoom,
          },
    ]
})
