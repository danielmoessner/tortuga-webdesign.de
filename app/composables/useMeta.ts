import type { Ref } from "vue";

export function useMeta(
  page: Ref<{ title: string; description: string } | undefined | null>,
) {
  const title = computed(() => {
    return page.value?.title || "";
  });

  const description = computed(() => {
    return page.value?.description || "";
  });

  useHead({
    title,
    meta: [
      {
        name: "description",
        content: description.value,
      },
      {
        property: "og:title",
        content: title.value,
      },
      {
        property: "og:description",
        content: description.value,
      },
      {
        name: "twitter:title",
        content: title.value,
      },
      {
        name: "twitter:description",
        content: description.value,
      },
    ],
  });
}
