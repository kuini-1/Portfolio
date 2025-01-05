<script lang="ts" setup>

const props = defineProps({
  header: {
    type: String,
    default: 'Table Details',
  },
  size: {
    type: Number,
    default: 600,
  },
  confirmFn: {
    type: Function as PropType<(...args: any[]) => any>,
    default: () => {},
  },
  cancelFn: {
    type: Function as PropType<(...args: any[]) => any>,
    default: () => {},
  },
  confirmLabel: {
    type: String,
    default: 'Confirm',
  },
  cancelLabel: {
    type: String,
    default: 'Cancel',
  },
  gridCol: {
    type: Number,
    default: 2,
  },
});

const dialogVisible = ref(true);
</script>

<template>
  <Dialog 
    v-model:visible="dialogVisible" 
    :style="{ width: `${props.size}px` }" 
    :header="props.header" 
    :modal="true" 
    @hide="props.cancelFn"
  >
    
    <div class="grid gap-6" :class="`grid-cols-${props.gridCol}`">
      <slot />
    </div>

    <template #footer>
      <Button :label="props.cancelLabel" icon="pi pi-times" text @click="props.cancelFn" />
      <Button :label="props.confirmLabel" icon="pi pi-check" @click="props.confirmFn" />
    </template>
  </Dialog>
</template>