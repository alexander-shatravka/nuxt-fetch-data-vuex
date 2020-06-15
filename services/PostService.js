import Api from '~/services/Api'

export default {
  index () {
    return Api().get(`posts?_limit=10`)
  },
  show (limit) {
    return Api().get(`posts?_limit=${limit}`)
  }
}
