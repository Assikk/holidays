export const state = () => ({
  page: "",
});

export const mutations = {
  GET_PAGE(state, payload) {
    state.page = payload;
  },
};

export const actions = {
  async get_page({ commit }, payload) {
    try {
      let res = await this.$axios.get(payload);
      commit("GET_PAGE", res.data);
    } catch (err) {
      console.log(err);
    }
  },
};
