<template>
    <div>
        <p class="text-right">{{ type }}</p>
        <textarea class="container" v-model="shortUrlsArray"></textarea>
        <button @click="doCopy" v-tooltip.top-center="title">Copy</button>
    </div>
</template>

<script>

    export default {
        name: 'UrlShort',
        props: {
            type: String
        },
        data: function () {
            return {
                title: 'Copy Urls'
            }
        },
        computed: {
            shortUrlsArray: function () {
                return this.$store.getters.shortUrlsArray.join("\n")
            }
        },
        methods: {
            doCopy: function () {
                this.$copyText(this.shortUrlsArray).then(function (e) {
                    // eslint-disable-next-line
                    console.log(e)
                }, function (e) {
                    // eslint-disable-next-line
                    console.log(e)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
