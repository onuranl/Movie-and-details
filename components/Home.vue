<template>
    <div>
        <h1>Now Playing Movies</h1>
        <p>You can click on images to learn movie details</p>
        <div v-for="result in results" :key="result.id">
            <now-playings :result="result"> </now-playings>
        </div>
    </div>
</template>

<script>
import NowPlayings from "./NowPlayings.vue"

export default {
  components: { NowPlayings },
    name: "Home",
    data() {
        return {
            results : [

            ]
        }
    },
    created() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=76d4da0596ab2652de41eb56c7bfd7f7")
        .then(response => {return response.json()})
        .then(movies => {this.results=movies.results;})
    }
}
</script>

<style >
    body {
        background-color: black;
        text-align: center;
    }
    h1 {
        margin-left : 10px;
    }
    p{
        margin-left: 10px;
    }
</style>

