export const state = () => ({
  blogPosts: [],
  tags: [],
  workPosts: []
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setPortfolioPosts(state, list) {
    state.portfolioPosts = list;
  },
  setTags(state, list) {
    state.tags = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/);
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setBlogPosts', blogPosts);
    let tagFiles = await require.context('~/assets/content/tag/', false, /\.json$/);
    let tags = tagFiles.keys().map(key => {
      let res = tagFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setTags', tags);
    let portfolioFiles = await require.context('~/assets/content/portfolio/', false, /\.json$/);
    let portfolioPosts = portfolioFiles.keys().map(key => {
      let res = portfolioFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setPortfolioPosts', portfolioPosts);
  },
};