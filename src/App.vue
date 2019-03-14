<template>
    <div id="app">
        <dash/>
        <span class="version">routeman v.{{appVersion}}</span>
    </div>
</template>

<script>
    import Dash from './components/Dash.vue';
    /* eslint-disable */
    export default {
        name: 'app',

        data() {
            return {
                appVersion: '-'
            }
        },

        components: {
            Dash
        },

        mounted() {
            this.appVersion = JSON.parse(unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D')).version;
        }
    }
</script>

<style>

    .version {
        font-size: 12px;
        color: #CCC;
        position: absolute;
        top: 0px;
        right: 5px
    }

    #app {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        overflow-x: hidden;
    }
</style>
