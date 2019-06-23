<template>
    <b-card :title="'Coco title ' + tweet.id" sub-title="Coco subtitle" class="m-2">
        <img
            src="https://m.media-amazon.com/images/S/aplus-media/vc/e0636a6f-30e8-4e58-9005-6a234e4feaa4._CR0,0,300,400_PT0_SX300__.png"
            alt="El Coco"
        >
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
            id: String
        }
    }
};
</script>

<style>
.tweet {
    color: green;
}
img {
    width: 50px;
}
</style>
