import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pack_list: []
    },
    getters: {
        isLoaded: state => !!state.pack_list.length,

        getPackById: (state) => (id) => {
            return state.pack_list.find(pack => pack.pack_id === id);
        }
    },
    mutations: {
        SET_PACK_LIST(state, payload) {
            state.pack_list = payload;
        }
    },
    actions: {
        fetchPackages(context) {
            axios
                .get('/api/packages')
                .then(({ data }) => {
                    if (data.errorCode == 0 && data.message == 'Success') {
                        context.commit('SET_PACK_LIST', data.data.pack_list);
                    }
                }).catch(error => {
                    console.log(error);
                });
        },
    }
});
