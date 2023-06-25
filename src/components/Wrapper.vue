<script lang="ts" setup>
import {defineProps} from "vue";

defineProps({
  paddingInline: Number,
  paddingBlock: Number
})

</script>
<template>
<!--  <div :style="{ paddingBlock: paddingBlock + 'px', paddingInline: paddingInline + 'px' }">-->
<!--    <slot/>-->
<!--  </div>-->
<div class="px-16  md:px-32">
  <slot />
</div>
</template>
