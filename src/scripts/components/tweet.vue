<template>
    <b-card
        :img-src="tweet.author.avatar_url"
        :title="tweet.author.name"
        :sub-title="created_time | myDate"
        class="m-2"
        img-left>
        {{tweet.body}}
    </b-card>
</template>

// Ecma script modules Export default oznacza ze epxportujemy
<script>
import { formatDatingo } from "@/helpers/my-date";
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
            return formatDatingo(this.tweet.created_time);
        }
    },
    filters : {
        myDate(value) {
            return formatDatingo(value);
        }
    }
};
</script>

<style>
</style>
