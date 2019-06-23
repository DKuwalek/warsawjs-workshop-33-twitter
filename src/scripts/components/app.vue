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
    methods: {
        async fetchTweets() {
            const url = "http://localhost:3000/tweets";

            try {
                //Async way
                const response = await fetch(url);
                return  await response.json();
                // this.tweets = tweets;
            } catch (err) {
                console.log(err);
            }

            // Oldies which we have replaced with 2 await lines
            // fetch(url)
            //     .then( (response) => {
            //         return response.json()
            //     })
            //     .then((tweets) => {
            //         this.tweets = tweets;
            //     });
        }

    },
    async mounted() {
        // console.log("app.vue is ready");
        this.tweets = await this.fetchTweets();
    }
};
</script>

<style>
</style>
