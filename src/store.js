// src/store.js

import { states } from './enums/task.states';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: '1', title: 'Something', state: states.inbox },
      { id: '2', title: 'Something more', state: states.inbox },
      { id: '3', title: 'Something else', state: states.inbox },
      { id: '4', title: 'Something again', state: states.inbox },
    ],
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      let task = state.tasks.find(task => task.id === id);
      if (task.state === states.archived) {
        task.state = states.inbox;
      } else {
        task.state = states.archived;
      }
      // state.tasks.find(task => task.id === id).state = states.archived;
    },
    PIN_TASK(state, id) {
      let task = state.tasks.find(task => task.id === id);
      if (task.state === states.pinned) {
        task.state = states.inbox;
      } else {
        task.state = states.pinned;
      }
      // state.tasks.find(task => task.id === id).state = states.pinned;
    },
  },
  actions: {
    archiveTask({ commit }, id) {
      commit('ARCHIVE_TASK', id);
    },
    pinTask({ commit }, id) {
      commit('PIN_TASK', id);
    },
  },
});