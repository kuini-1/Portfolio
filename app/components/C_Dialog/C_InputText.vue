<script lang="ts" setup>
const modelValue = defineModel('modelValue')

const props = defineProps({
  label: {
    type: String,
  },
  defaultValue: {
    type: String,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  span: {
    type: Number,
    default: 1,
  },
});

const isInvalid = computed(() => props.required && !modelValue?.value);

const clear = () => {
  modelValue.value = props.defaultValue
}
</script>

<template>
  <div :class="`col-span-${span}`" class="space-y-3">
    <label class="block font-bold">{{ label }}</label>
    <InputGroup>
      <InputText 
        v-model="modelValue"
        :required="required" 
        :autofocus="autoFocus" 
        :fluid="fluid" 
        :invalid="isInvalid"
      />
      <Button v-if="defaultValue" @click="clear" icon="pi pi-times" severity="secondary" />
    </InputGroup>
  </div>
</template>