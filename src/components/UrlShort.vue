<template>
    <div>
        <p class="text-right">{{ type }}</p>
        <textarea class="container" v-model="shortUrlsArray" ></textarea>
    </div>
</template>

<script>
    export default {
        name: 'UrlShort',
        props: {
            type: String
        },
        computed: {
            shortUrlsArray: function () {
                return this.$store.getters.shortUrlsArray.join("\n")
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
