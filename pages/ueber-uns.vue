<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <!-- intro section -->
    <section class="small">
      <TheHeaderReflection />
      <div class="container">
        <div class="header is-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <h2 class="is-3 title">
                {{ page.intro.title }}
              </h2>
            </div>
          </div>
          <div v-if="page.intro.subtitle" class="columns">
            <div class="column is-4 is-offset-4">
              <div class="subtitle">
                {{ page.intro.subtitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- about section -->
    <section id="ueber-uns">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="header" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600">
              <div class="pretitle"><small>{{ page.about.pretitle }}</small></div>
              <h2 class="is-3 title">{{ page.about.title }}</h2>
              <p class="subtitle">{{ page.about.subtitle }}</p>
            </div>
            <div class="content" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
              <p>{{ page.about.text }}</p>
            </div>
          </div>
          <div class="column is-4 is-offset-2">
            <div class="image">
              <!-- <img class="is-rounded" src="{{ about.image }}" alt=""> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq section -->
    <section id="fragen">
      <div class="container">
        <div class="header is-center">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <h2 class="title is-3" data-aos="fade-up" data-aos-duration="600">{{ page.faq.title }}</h2>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <div class="subtitle" data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">{{ page.faq.subtitle }}</div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            <div class="faq-container">
              <div v-for="(item, index) in page.faq.questions" :key="index" class="faq">
                <div class="faq--question">
                  <div class="faq--question-title">
                    {{ item.question }}
                  </div>
                  <div class="faq--icon"><span class="icon has-text-primary"><i class="fas fa-angle-down"></i></span></div>
                </div>
                <div class="faq--answer">
                  <div class="faq--answer-text">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- cta section -->
    <section class="small">
      <div class="container">
        <div class="has-text-center">
          <CtaButton />
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
<script>
import TheSubpageHeader from "../components/TheSubpageHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeaderReflection from "../components/TheHeaderReflection.vue";
import CtaButton from "@/components/CtaButton.vue";

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    CtaButton
  },
  data() {
    return {
      page: this.$store.state.pages.about,
      buttonText: "Mehr erfahren"
    }
  },
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}

</script>
