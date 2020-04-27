<template>
  <div class="frame">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.frame {
  border: 5px solid $dark;
  position: relative;
  display: block;
  box-shadow: 0 0 2.8rem 0 rgba($color3, 1);
  // margin-bottom: 6rem;
  overflow: hidden;

  img {
    display: block;
  }

}

</style>
