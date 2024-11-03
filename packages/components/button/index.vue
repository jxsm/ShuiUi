<template>
    <button :type="props.nativeType" :disabled="props.disabled" :autofocus="props.autofocus" @click="$emit('click')"
        :class="buttonStyle">
        <slot name="icon" v-if="$slots.icon"></slot>
        <slot></slot>

    </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    type: {
        type: String as () =>
            | "default"
            | "primary"
            | "success"
            | "warning"
            | "danger"
            | "info"
            | "",
        default: "default",
    },
    size: {
        type: String as () => "small" | "medium" | "large" | "",
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
        type: String as () => "button" | "submit" | "reset",
        default: "button",
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
    }
})
</script>

<script lang="ts">
export default {
    name: "ShuiButton",
};
</script>

<style scoped lang="scss">
@import "../../scss/button/button.scss";
</style>
