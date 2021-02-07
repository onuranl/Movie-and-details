<template>
    <div> 
        <router-link :to="details"> 
        <img id="resim" :src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`">  
        </router-link>
    </div>
</template>

<script>
export default {
    name : "NowPlayings",
    props : {
        result : {

        }
    },
    computed: {
        details() {
            return `/${this.result.id}`;
        }
    }
}
</script>

<style scoped >
    body {
        background-color: black;
        margin:0;
        padding:0; 
    }
    div{
        float: left;

    }
    img {
        height: 400px;
        padding: 20px;
        margin-left: 20px;
    }
    
</style>
