<template>
    <b-card
        :img-src="tweet.author.avatar_url"
        :title="tweet.author.name"
        :sub-title="created_time"
        class="m-2"
        img-left>
        {{tweet.body}}
    </b-card>
</template>

// Ecma script modules Export default oznacza ze epxportujemy
<script>
export default {
    name: "Tweet",
    props: {
        tweet: {
            body: String,
            id: String,
            created_time: Date
        }
    },
    computed: {
        created_time() {
            const d = new Date(this.tweet.created_time);
            return d.toLocaleString('pl-PL');
        }
    }
};
</script>

<style>
</style>
