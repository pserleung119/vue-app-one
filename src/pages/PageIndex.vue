<template>
  <div class="index">
    <div>
      <h1>Your personal app.</h1>
      <div v-if="authUser">
        <router-link to="/user">Go To Your Page</router-link>
      </div>
      <div v-else>
        <router-link to="/signin">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      authUser: null
    }
  },
  methods: {
    signOut: () => {
      firebase.auth().signOut()
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user
    })
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }

  .index {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
