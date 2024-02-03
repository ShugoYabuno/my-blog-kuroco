<script setup>
const contents = ref([]);
const route = useRoute();
const slug = route.params.slug;

const fetchData = async () => {
  const res = await useFetch(`/api/content/details/${slug}`);
  // contents.value = res.data.value.contents;
};

await fetchData();
</script>

<template>
  <div>
    <p>テスト</p>
  </div>
</template>
