import { type Ref } from "vue";

export function useMeta(page: Ref<Record<string, any> | undefined> | undefined) {
  const title = computed(() => {
    return (
      page?.value?.title || (page?.value?.meta ? page?.value?.meta.title : false)
    );
  });

  const description = computed(() => {
    return (
      page?.value?.description ||
      (page?.value?.meta ? page?.value?.meta.description : false)
    );
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
