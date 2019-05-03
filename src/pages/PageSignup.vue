<template>
  <div class="signup">
    <h2>Sign up</h2>
    <span class="errormsg">{{ errorMsg }}</span>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signUp" class="btn">Register</button>
    <p>Do you have an account?
      <router-link to="/signin">sign in now!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          alert(`Created account: ${result.user.email}`)
          this.$router.push('/')
        })
        .catch(error => {
          this.errorMsg = error.message
          this.password = ''
        })
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

  .signup {
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
