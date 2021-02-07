import Vue from 'vue'
import Embed from 'v-video-embed'

Vue.use(Embed);

import VueRouter from 'vue-router'

Vue.use(VueRouter)



import App from './App.vue'
import Home from "../components/Home.vue"
import NowPlayings from "../components/NowPlayings.vue"
import MovieDetails from "../components/MovieDetails.vue"



const router = new VueRouter(
  {
    routes : [
      {path:"/", component: Home},
      {path:"/:id", component: MovieDetails},


    ],
    mode : "history"
}
) 


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
