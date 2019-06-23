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
                { id: "1", body: "Delicious Coco 1" },
                { id: "2", body: "Delicious Coco 2" },
                { id: "3", body: "Delicious Coco 3" },
                { id: "4", body: "Delicious Coco 4" },
                { id: "5", body: "Delicious Coco 5" }
            ]
        };
    }
};
</script>

<style>
</style>
