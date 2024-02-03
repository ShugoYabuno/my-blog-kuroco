<script setup>
const contents = ref([]);

const fetchData = async () => {
  const res = await useFetch("/api/content/list");
  contents.value = res.data.value.contents;
};

await fetchData();
</script>

<template>
  <div>
    <NuxtLink :to="`/contents/${content.slug}`" v-for="content in contents">
      <p>{{ content.subject }}</p>
    </NuxtLink>
  </div>
</template>
