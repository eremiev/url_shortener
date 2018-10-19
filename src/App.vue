<template>
    <div class="container">
        <header class="text-center">URL</header>
        <div class="row">
            <UrlLong class="col-lg-6" type="Long"></UrlLong>
            <UrlShort class="col-lg-6" type="Short"></UrlShort>
        </div>
    </div>
</template>

<script>
    import UrlLong from './components/UrlLong.vue'
    import UrlShort from './components/UrlShort.vue'

    export default {
        name: 'app',
        components: {
            UrlLong,
            UrlShort
        }
    }
</script>

<style>
    textarea {
        background: white;
        border: 0;
        box-shadow: inset 0 0 5px black;
        min-height: 300px;
        /*white-space: pre-wrap;*/
        /*word-wrap: break-word;*/
        /*font-family: inherit;*/
    }
</style>
