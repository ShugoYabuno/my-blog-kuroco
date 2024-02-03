import { apiBaseUrl } from "~/server/api/common";
import { Content } from "~/types";

export default defineEventHandler(async () => {
  const res = await $fetch<{
    list: Content[];
  }>(`${apiBaseUrl}/content/list`);
  const contents = res.list ?? [];

  return {
    contents,
  };
});
