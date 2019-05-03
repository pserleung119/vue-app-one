<template>
  <div class="hello">
    <div v-if="authUser">
      <h2>Hello {{ authUser.email }}!!</h2>
      <h3>Your are signed in from {{ location }}.</h3>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'User',
  data () {
    return {
      authUser: null,
      location: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user
    })
    axios
      .get('https://api.ipgeolocation.io/ipgeo?apiKey=da87335f71aa4bdbb6480658ce7733fb')
      .then(result => {
        this.location = result.data.country_name
      })
      .catch(error => {
        console.log(error)
        this.location = 'Somewhere'
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
.hello {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
