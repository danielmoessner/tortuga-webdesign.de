<template>
  <main v-if="item" class="">
    <SubNavigation :text="item.title" class="bg-sunshine-100" />
    <SvgHeader
      width="800"
      top="-120"
      svg-name="referenzen"
      title="Referenz"
      :swap-heading-element="true"
      :subtitle="item.title"
    />
    <section class="relative pb-20 md:pt-32 md:pb-40 bg-sunshine-100">
      <div class="container">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div class="">
            <StickyInfo
              :dark-tag="itemDate"
              :tags="item.tags"
              :title="item.title"
              :description="description"
            >
              <nuxt-link
                v-if="item.url"
                target="_blank"
                class="text-gray-900 underline transition duration-150 ease-in-out hover:text-gray-700"
                :to="item.url"
              >
                {{ itemUrlClean }}
              </nuxt-link>
              <div class="flex flex-wrap mt-12 md:mt-20">
                <GrayButton
                  text="Zurück zu allen Referenzen"
                  to="/referenzen/"
                  class="mb-2"
                />
              </div>
            </StickyInfo>
          </div>
          <div class="col-span-1 lg:col-span-2">
            <div class="border-4 border-teal-700 rounded-lg shadow-lg">
              <div class="overflow-hidden bg-teal-700 rounded">
                <img
                  class="w-full"
                  :src="item.image"
                  sizes="lg:2000px"
                  :alt="item.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NewFooter
      bg-color="bg-teal-900"
      text-color="text-white"
      link-color="text-sunshine-200"
      hover-color="text-sunshine-300"
      :invert-logo="true"
    />
  </main>
</template>
<script lang="ts" setup>
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import StickyInfo from "@/components/StickyInfo.vue";
import GrayButton from "@/components/GrayButton.vue";
import SvgHeader from "@/components/SvgHeader.vue";

definePageMeta({ layout: "new" });

const { params, path } = useRoute();

const { data: item } = await useAsyncData(`portfolio-${path}`, () =>
  queryCollection("referenzen").path(`/portfolio/${params.slug}`).first(),
);

if (!item || !item.value || !item.value.title) {
  throw createError({
    statusCode: 404,
  });
}

useMeta(item);

const months = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
];

const itemDate = computed(() => {
  const date = new Date(item.value?.date as string);
  return months[date.getMonth()] + " " + date.getFullYear();
});

const itemUrlClean = computed(() => {
  const url = item.value?.url;
  return url?.replace("https://", "").replace("http://", "");
});

const description = computed(() => {
  return item.value?.description.split("\n").join("<br>") || "";
});
</script>
