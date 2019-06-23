<template>
    <div>
        <TweetList :tweets="tweets"/>
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";

export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: [
                // http://localhost:3000/tweets
            ]
        };
    },
    async mounted() {
        console.log("app.vue is ready");
        const url = 'http://localhost:3000/tweets';

        //Async way
        const response = await fetch(url);
        const tweets = await response.json();
        this.tweets = tweets;

        // fetch(url)
        //     .then( (response) => {
        //         return response.json()
        //     })
        //     .then((tweets) => {
        //         this.tweets = tweets;
        //     });
    }
};
</script>

<style>
</style>
