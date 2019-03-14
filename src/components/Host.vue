<template>
    <div class="host">
        <div class="table">
            <el-row>
                <el-col :span="4" align="right"><i
                        :class="{'el-icon-circle-check': alive, 'el-icon-circle-close': !alive }"></i></el-col>
                <el-col :span="8" align="center"> {{data.hostname}}</el-col>
                <el-col :span="8" align="center">
                    <el-switch
                            :value="switchValue"
                            :loading="loading"
                            :disabled="!alive"
                            @input="activateGw"
                            active-text="Cyfra"
                            inactive-color="#13ce66"
                            active-color="#13ce66"
                            inactive-text="Telepark">
                    </el-switch>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import api from '../api';

    export default {
        props: ["data"],

        data() {
            return {
                alive: true,
                loading: false,
                currentGateway: ''
            }
        },

        computed: {
            switchValue: function () {
                return this.getSwitchValue();
            }
        },

        methods: {
            async getCurrentGw() {
                try {
                    this.currentGateway = await api.getCurrentGw(this.data.address);
                    this.alive = true;
                } catch (e) {
                    this.alive = false;

                } finally {
                    this.loading = false;
                }
            },

            async activateGw(value) {

                var gw = this.getGwStringByBoolean(value);

                try {
                    this.loading = true;

                    await api.activateGw(this.data.address, gw);

                    this.getCurrentGw();

                } catch (e) {

                } finally {
                    this.loading = false;
                }

            },

            getGwStringByBoolean(val) {
                return val ? 'cyfra' : 'telepark';
            },

            getSwitchValue() {
                return this.currentGateway == 'cyfra' ? true : false;
            }

        },

        mounted() {
            this.getCurrentGw();

            setInterval(() => {
                this.getCurrentGw();
            }, 10000);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table {
        width: 500px;
        margin: 40px 0 0;
    }

    .host >>> .el-icon-circle-check {
        color: #13ce66;
    }

    .host >>> .el-icon-circle-close {
        color: red;
    }
</style>
