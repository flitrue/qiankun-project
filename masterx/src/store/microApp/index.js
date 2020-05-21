
export default {
  namespaced: true,
  state: {
    content: '', // html  自应用内容 ,
    microAppLoading: false,// 子应用加载框
    microAppShow: false, // 主子应用内容 展示状态判断

  },
  getters: {
    
  },
  mutations: {
    changeCenter(state, params) {
      state.content = params;
    },
    changeLoading(state, params) {
      state.microAppLoading = params;
    },
    changeMicroAppShow(state, params) {
      state.microAppShow = params;
    },
    
  },
 
};
