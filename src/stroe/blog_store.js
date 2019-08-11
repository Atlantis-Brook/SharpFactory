export default {
    state:{
        id:1
    },
    getters:{
        id(state){
            return state.id;
        }
    },
    mutations:{
        getBlogId(state,id){
            state.id = id;
        }
    },

    
}