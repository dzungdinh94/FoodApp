const initStore = {
    count: 0
}

export default function reducer(state = initStore,action){
    switch (action.type){
        case 'INCREMENT':
            const count_incre = state.count + action.payload
            return {
                ...state,
                count_incre,
            };
            // case "DECREMENT":
            //     const count_decre = state.count - action.payload
            //     return {
            //         ...state,
            //         count_decre
            //     };
           
            default: return state;

    }
}