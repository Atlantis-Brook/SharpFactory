export default {
    state:{
        id:null
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