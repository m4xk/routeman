import Vue from "vue";

export default {

    perform(callback) {
        return new Promise(async (resolve, reject) => {
            try {
                let r = await callback();
                resolve(r.body.data);
            } catch (e) {
                reject(e);
            }
        });
    },

    getCurrentGw(address, scheme = 'http') {
        return this.perform(function () {
            return Vue.http.get(`${scheme}://${address}/gateways/current`);
            }
        );
    },

    activateGw(address, gw, scheme = 'http') {
        return this.perform(function () {
                return Vue.http.get(`${scheme}://${address}/gateways/${gw}/activate`);
            }
        );
    }
}