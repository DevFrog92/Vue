<template>
  <article>
    <h2>{{ book.title }}</h2>
    <p>
      {{ book. description }}
    </p>
  </article>
</template>

<script>
export default {
  props: ['book'],
}
</script>

<style scoped>
article {
  background-color: #efefef;
  border-radius: 1rem;
  padding: 1rem 2rem;
  box-shadow: 0px 3px 5px rgba(0,0,0,.2);
  margin-bottom: 2rem;
  color: #2c3e5c;
}

article h2 {
  margin-bottom: 1rem;
}
</style>