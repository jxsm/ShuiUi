<template>
    <div>
        <input :maxlength="maxlength" :value="modelValue" v-model="userInput" :type="props.type" class="shui-input">
    </div>
</template>





<script setup lang="ts">
import { ref, watch } from 'vue';
import { ShuiInputTypes } from '../../types/input/input';


const props = defineProps({
    type: {
        type: String as () => ShuiInputTypes,
        default: 'text'
    },
    maxlength:{
        type:[String,Number],
        default:""
    }
})

const userInput = ref('')

const modelValue = defineModel()

const emit = defineEmits(['update:modelValue'])

watch(userInput, () => {
    emit('update:modelValue', userInput.value)
})


</script>


<script lang="ts">
export default {
    name: "ShuiInput",
};
</script>


<style scoped>
@import "../../scss/input/input.scss"
</style>