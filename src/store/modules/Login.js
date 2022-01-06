import axios from 'axios'
import router from '../../router';

const Login = {
    state: {
        user: null,
        userid: null,
        siguser: null
    },
    mutations: {
        setsiguser(state, payload) {
            state.siguser = JSON.stringify(payload)
            if(payload.setlogin == true){ //로그인 유지가 true이면
                router.push({name:'Home', params: {id:payload.id}}) //router 이동
            }
        },

        setlogin(state, payload) {
            state.siguser = JSON.stringify(payload)
            router.push({name:'Home', params: {id:payload.id}})
        },
    },
    
    actions: {
        signup({commit}, payload) {
            axios.post(`${'http://localhost:8000'}/signup`, {
                username: payload.username,
                usermail: payload.usermail,
                userid: payload.userid,
                userpassword: payload.userpassword,
                checkpassword: payload.checkpassword
            }).then((res) => {
                commit('setsiguser', {username: res.data.username ,userid: res.data.uerid})
    

            }).catch((error) => {
                console.log(error);
            })

        },
        //login.vue에서 login버튼 클릭시
        login({commit}, payload) {
            axios.post(`${'http://localhost:8000'}/login`, {
                sigid: payload.username,
                sigpw: payload.password,
                login: payload.setlogin
            }).then((res) => {
                commit('setlogin', {sigid: res.data.sigid, sigpw: res.data.sigpw, setlogin:res.data.login, id: res.data.id})
                localStorage.setItem("user", JSON.stringify({sigid: res.data.sigid, id: res.data.id}))
            })
        },
        //로그인 유지
        setlogin({commit}, payload) { 
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/login?id=${payload}`).then((res) => {
                const set = {
                    sigid: res.data[0].sigid,
                    sigpw: res.data[0].sigpw,
                    setlogin:res.data[0].login,
                    id: res.data[0].id
                }
                console.log(set);
                commit('setsiguser', set) //mutation에 setsiguser 실행
                
                resolve(res);
            }).catch((error) => {
                reject(error);
            })
            })
    }, 
        
    },
    getters: {
        user (state) {
            return state.user
          }
    }
}
export default Login