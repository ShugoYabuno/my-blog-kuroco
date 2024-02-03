import { apiBaseUrl } from "~/server/api/common";
import { Content } from "~/types";

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug;

  const res = await $fetch<{
    list: Content[];
  }>(`${apiBaseUrl}/content/details/${slug}`);
  console.log(res);

  return {
    hoge: "hoge",
  };
});
