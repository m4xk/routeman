<template>
    <div class="dash">
        <el-row>
            <el-col :gutter="28"><h3>Route Manager</h3></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24" align="center">
                <host v-for="host in hosts" :data="host" :key="host.name"></host>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import Host from './Host';
    import config from '../config';


    export default {
        name: 'HelloWorld',
        components: {
            Host
        },
        data() {
            return {
                hosts: config.hosts
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
