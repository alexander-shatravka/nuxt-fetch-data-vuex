<template>
  <div class="container">
    <div>
      <div
        v-for="post in allPosts"
        :key="post.id"
        class="posts"
      >
        <div class="post">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Posts',
  data () {
    return {
      posts: []
    }
  },
  computed: mapGetters({
    allPosts: 'post/allPosts'
  }),
  async fetch ({ store, error }) {
    try {
      if (store.getters['post/allPosts'].length === 0) {
        await store.dispatch('post/loadPosts')
      }
    } catch (e) {
      error(e)
    }
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
