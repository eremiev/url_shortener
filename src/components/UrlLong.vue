<template>
    <div>
        <p>{{ type }}</p>
        <textarea class="container" v-model="longUrls" @keyup="addToArray" placeholder="Your text here" required></textarea>
        <p>{{ longUrlsArray }}</p>
        <button @click="makeShort" :disabled=loading>Convert</button>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'UrlLong',
        props: {
            type: String
        },
        data: function () {
            return {
                longUrls: '',
                loading: false
            }
        },
        computed: {
            longUrlsArray: function () {
                return this.$store.getters.longUrlsArray
            },
            shortUrlsArray: function () {
                return this.$store.getters.shortUrlsArray
            }
        },
        methods: {
            addToArray: function () {
                this.$store.commit('updateLongUrlArray', this.longUrls.split("\n"));
            },
            makeShort: function () {
                let self = this;
                this.loading = true;
                this.$store.commit('clearShortUrlArray');
                let key = "";


                this.longUrlsArray.forEach(function (url) {
                    axios.post("https://www.googleapis.com/urlshortener/v1/url?key=" + key, {'longUrl': url})
                        .then((response) => {
                            // eslint-disable-next-line
//                            console.log(response);
                            self.$store.commit('updateShortUrlArray', response.data.id ? response.data.id : response.data.longUrl);
                            if (self.shortUrlsArray.length === self.longUrlsArray.length)
                                self.loading = false;
                        }, (error) => {
                            // eslint-disable-next-line
                            console.log(error);
                        })
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
