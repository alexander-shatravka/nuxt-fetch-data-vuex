import PostService from '~/services/PostService'

export const state = () => ({
  posts: []
})

export const actions = {
  async loadPosts ({ commit }) {
    try {
      const posts = await PostService.show(5)
      commit('updatePosts', posts.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}

export const getters = {
  allPosts (state) {
    return state.posts
  }
}
export const mutations = {
  updatePosts (state, posts) {
    state.posts = posts
  }
}
