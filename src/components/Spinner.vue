<template>
  <div class="spinner"></div>
</template>

<script>
export default {};
</script>

<style>
.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid transparent;
  margin: 20px auto;
  border-top-color: red;
  animation: spin 0.75s infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
