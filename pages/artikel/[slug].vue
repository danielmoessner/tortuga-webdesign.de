<template>
  <main class="">
    <SubNavigation
      small
      :text="`${page?.title} - ${article?.title}`"
      class="bg-sunshine-100"
    />
    <section class="lg:bg-gray-100 bg-sunshine-100">
      <div class="container small">
        <div class="relative min-h-screen pt-12 pb-24 bg-sunshine-100">
          <div class="max-w-3xl mx-auto">
            <nuxt-link to="/artikel" class="text-xs">
              &#x2190; Zurück zu allen Artikeln
            </nuxt-link>
            <article class="mt-8">
              <header class="flex flex-col">
                <h2
                  class="mt-6 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl"
                >
                  {{ article?.title }}
                </h2>
                <time
                  :datetime="article?.date"
                  class="flex items-center order-first text-base text-gray-400"
                >
                  <span class="h-4 w-0.5 rounded-full bg-gray-200"></span>
                  <span class="ml-3">{{ formatDate(article?.date) }}</span>
                </time>
              </header>
              <ProseNormal>
                <ContentDoc :path="`/blog/${params.slug}`" />
              </ProseNormal>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { formatDate } from "@/lib/formatDate";

definePageMeta({ layout: "narrow-layout" });

const { data: page } = await useAsyncData("page", () =>
  queryContent("/page/blog").findOne(),
);

const { params, path } = useRoute();

const { data: article } = await useAsyncData(`article-${path}`, () =>
  queryContent(`/blog/${params.slug}`).findOne(),
);

if (!article.value?.title) {
  throw createError({
    statusCode: 404,
  });
}

useMeta(page);
</script>
