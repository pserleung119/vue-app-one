<template>
  <div class="header">
    <div class="headerPart">
      <router-link :to="{name: 'Index'}"><font-awesome-icon icon="home"></font-awesome-icon></router-link>
    </div>
    <div v-if="authUser" class="headerPart">
      <span @click="signOut">Sign Out</span>
    </div>
    <div v-else class="headerPart">
      <router-link :to="{name: 'Signin'}">Sign In</router-link>
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
  .header {
    position: fixed;
    top:0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
  }
  .headerPart {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  }
  .headerPart > svg {
    color: #fff;
  }
  .headerPart > span {
    padding-left: 1rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  .headerPart > span:hover {
    color: #42b983;
  }
  .headerPart > a {
    padding-left: 1rem;
    color: #fff;
    text-decoration: none;
  }
  .headerPart > a:hover {
    color: #42b983;
  }
</style>
