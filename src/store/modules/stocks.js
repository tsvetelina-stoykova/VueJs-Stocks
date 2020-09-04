import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOKS' (state, stocks){
        state.stocks = stocks;
    },
    'RND_STOKS' (state) {

    }
};

const actions = {
    buySTock: ({commit}, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    },
   
};

const getters = {
        stocks: state => {
            return state.stocks;
        }
};

export default {
    state,
    mutations,
    actions,
    getters
}

