<template>
  <div class="notFound">
    <h1 class="headingLarge">Not Found</h1>
    <p>Oops, we could not find what you are looking for. Why don't you <router-link :to="{name: 'Index'}">
        go home instead?
      </router-link>
    </p>
  </div>
</template>

<style scoped>
  .notFound {
    display: flex;
    flex-flow: column nowrap;
    justify-content: left;
    align-items: flex-start;
    height: 100%;
    padding-top: 1rem;
    padding-left: 2rem;
  }

  .headingLarge {
    font-size: 150%;
  }
</style>
