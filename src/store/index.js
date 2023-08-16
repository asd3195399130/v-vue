import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Hellow = {
  namespaced: true,
  state: {
    sum: 0,
    wather: "晴天",
  },
  actions: {
    add(context, value) {
      console.log(context);
      context.commit("ADD", value);
    },
    minus(context, value) {
      context.commit("MINUS", value);
    },
    jiaOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit("ADD", value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("ADD", value);
      }, 1000);
    },
  },
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    MINUS(state, value) {
      state.sum -= value;
    },
  },
  getters: {
    bigsum(state) {
      return state.sum * 100000;
    },
  },
};
const Addition = {
  namespaced: true,
  state: {
    sum: 0,
    wather: "晴天",
  },
  actions: {
    add(context, value) {
      console.log(context);
      context.commit("ADD", value);
    },
    minus(context, value) {
      context.commit("MINUS", value);
    },
    jiaOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit("ADD", value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("ADD", value);
      }, 1000);
    },
  },
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    MINUS(state, value) {
      state.sum -= value;
    },
  },
  getters: {
    bigsum(state) {
      return state.sum * 100000;
    },
  },
};
// const actions = {};
// const mutations = {};
// const state = {};
// const getters = {};
export default new Vuex.Store({
  modules: {
    Hellow,
    Addition,
  },
});
