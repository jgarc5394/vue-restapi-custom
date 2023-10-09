<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      images: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    v-if="props.character.id"
    :to="`/characters/${props.character.id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.character.images[0]"
    />
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-gray-800">
        {{ props.character.name }}
      </h2>
    </div>
  </RouterLink>
</template>
