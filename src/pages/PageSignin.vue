<template>
  <div class="signin">
    <h2>Sign in</h2>
    <span class="errormsg">{{ errorMsg }}</span>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn" class="btn">Signin</button>
    <p>You don't have an account?
      <router-link to="/signup">create account now!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.push('/user')
        },
        err => {
          this.errorMsg = err.message
          this.password = ''
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #fff;
  }

  a:hover {
    color: #42b983;
  }

  input {
    margin: 10px 0;
    padding: 10px;
  }

  button {
    margin: 1rem;
  }

  .signin {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .errormsg {
    color: red;
    font-size: 75%;
  }

  .btn {
    padding: 0.5rem 3rem;
    background-color: #42b983;
    border: 0;
    border-radius: 5rem;
    color: #fff;
    outline: 0;
    cursor: pointer;
  }
</style>
