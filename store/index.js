export const state = () => ({
  general: {},
});

export const getters = {
  general: (state) => state.general,
  footer: (state) => state.general.footer,
  head: (state) => state.general.head,
};

export const mutations = {
  setGeneral(state, general) {
    state.general = general;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const general = await this.$content("page/general").fetch();
    await commit("setGeneral", general);
  },
};
