<template>
  <div style="width: 400px;height: 20px;">
    <ShuiInput :maxlength="3" v-model.lazy="data"></ShuiInput>
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue';
import ShuiInput from '../packages/components/input/index';


const data = ref('')

watch(data,()=>{
  console.log(data)
})

</script>

<style scoped>
.b {
  width: 50px;
  height: 50px;
}
</style>