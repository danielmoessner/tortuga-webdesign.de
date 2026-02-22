<template>
  <main class="">
    <SubNavigation
      small
      :text="`${page.title} - ${article?.title}`"
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
              <ProseNormal>
                <ContentRenderer v-if="article" :value="article.body" />
              </ProseNormal>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: "narrow-layout" });

const { data: page } = await useAsyncData("artikel", () =>
  queryCollection("seiten").path("/page/blog").first(),
);

const { params, path } = useRoute();

const { data: article } = await useAsyncData(`article-${path}`, () =>
  queryCollection("artikel").path(`/blog/${params.slug}`).first(),
);

useMeta(page);
</script>
