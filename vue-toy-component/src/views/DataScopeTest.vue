<template>
  <div>
    <Button :index="1" />
    <Button :index="2" />
    <Button :index="3" />
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<style></style>
