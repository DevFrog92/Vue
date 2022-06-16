<template>
  <div class="lock">
    <div class="header"></div>
    <div class="body_wrapper">
      <div class="body"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.lock {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid;
}

.header {
  width: 10px;
  height: 12px;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header::before {
  position: absolute;
  content: '';
  width: 8px;
  height: 10px;
  border-radius: 4px;
  background-color: #3871ff;
}

.body_wrapper {
  position: absolute;
  bottom: 2px;
}

.body {
  width: 16px;
  height: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
}

.body::before {
  position: absolute;
  content: '';
  background-color: #3871ff;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  top: 4px;
}

.body::after {
  position: absolute;
  content: '';
  width: 2px;
  height: 3px;
  background-color: #3871ff;
  top: 7px;
}
</style>
