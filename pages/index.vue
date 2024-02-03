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
    <p v-for="content in contents">{{ content.subject }}</p>
  </div>
</template>
