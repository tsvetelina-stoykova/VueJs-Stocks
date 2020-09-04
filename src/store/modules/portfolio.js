const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCKS'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
    }
}