<template>
    <div>
        <img :src="`http://image.tmdb.org/t/p/w500/${results.poster_path}`">  
        <h1>{{results.title}}</h1>
        <p>{{results.overview}} </p>
        <p v-for="video in filteredItems" :key="video"> 
            <video-embed  :src="`https://www.youtube.com/watch?v=${video.key}`"></video-embed>
        </p>
        <ul>
            <li>
                <div id="details"  v-for="category in categories" :key="category.id">
                {{category.name}}   
                </div>     
            </li>
            <li>
                Runtime : {{results.runtime}} min
            </li>
            <li>
                Release Date : {{results.release_date}}
            </li>
            <li> 
                Vote Average : {{results.vote_average}}
            </li>
        </ul>
        <router-link :to="goBack">  Return to the movie list </router-link>
    </div>
</template>

<script>
export default {
    name : "MovieDetails",
    data() {
        return {
            results : [

            ],
            categories : [

            ],
            videos : [

            ]
        }
    },
    computed: {
        filteredItems: function () {
            return this.videos.slice(0, 1)
        },
        goBack () {
            return "/"
        }

    },
    created() {
        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=76d4da0596ab2652de41eb56c7bfd7f7`)
        .then(response => {return response.json()})
        .then(movies => {this.results=movies;})
        .then(movies => {this.categories=this.results.genres;});
        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=76d4da0596ab2652de41eb56c7bfd7f7`)
        .then(response => {return response.json()})
        .then(videos => {this.videos=videos.results})
    },
    
}

</script>

<style  >
    body{
        background-color: black;
    }
    img{
        float: left;
        height: 37rem;
    }
    div{
        text-align: center;
    }
    li{
        padding: 10px;
    }
</style>

