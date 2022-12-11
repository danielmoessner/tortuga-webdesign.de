import { Ref } from "vue";

export function useMeta(page: Ref<any>) {
  const title = computed(() => {
    return (
      page.value.title || (page.value.meta ? page.value.meta.title : false)
    );
  });

  const description = computed(() => {
    return (
      page.value.description ||
      (page.value.meta ? page.value.meta.description : false)
    );
  });

  useHead({
    title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: description.value,
      },
      // Open Graph
      {
        hid: "og:title",
        property: "og:title",
        content: title.value,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: description.value,
      },
      // Twitter Card
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: title.value,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description.value,
      },
    ],
  });
}
