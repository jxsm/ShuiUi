<template>
    <button :type="props.nativeType" :autofocus="props.autofocus" @click="$emit('click')" :class="buttonStyle">
        <slot name="icon" v-if="$slots.icon"></slot>
        <slot></slot>

    </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ButtonSize, ButtonType ,NativeType} from "../../types/button/button";

// import ColorJS from "color";

const props = defineProps({
    type: {
        type: String as () => ButtonType,
        default: "default",
    },
    size: {
        type: String as () => ButtonSize,
        default: "medium",
    },
    plain: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    autofocus: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    nativeType: {
        type: String as () => NativeType,
        default: "button",
    },
    color: {
        type: String,
        dfault: ""
    },

});

const emit = defineEmits(["click"]);

const buttonColer = computed(() => {
    if (props.type === "") {
        return {
            "shui-button": true,
            "shui-button-default": !props.plain,
            "shui-button-default-plain": props.plain,
        };
    }
    return {
        "shui-button": true,
        [`shui-button-${props.type}`]: !props.plain,
        [`shui-button-${props.type}-plain`]: props.plain,
    };
});

const buttonSize = computed(() => {
    if (props.size === "") {
        return {
            "shui-button-size-medium": true,
        }
    }
    return {
        [`shui-button-size-${props.size}`]: true,
    }
});

const buttonCircle = computed(() => {
    return {
        "shui-button-circle": props.circle,
    }
})


const buttonStyle = computed(() => {
    return {
        ...buttonColer.value,
        ...buttonSize.value,
        ...buttonCircle.value,
        "is-disabled": props.disabled,
    }
})

const userColor = computed(() => {


})


// const createUserColorClass = (color:string)=>{
//     const c = ColorJS(props.color);
//     return{

//     }
// }


console.log(userColor.value);

</script>

<script lang="ts">
export default {
    name: "ShuiButton",
};
</script>

<style lang="scss">
@import "../../scss/button/button.scss";
</style>
