<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <!-- work section -->
    <section id="referenzen">
      <div class="header-reflection"></div>
      <div class="container">
        <div class="portfolio">
          <div class="portfolio--left">
          	<div v-for="(item, index) in portfolioPosts" :key="index" class="portfolio--item">
				<PortfolioShowcase  :portfolioItem="item" />
          	</div>
            <!-- {% for work in collections.work %}
            {% if loop.index % 3 == 1 %}
            <div class="portfolio--item {% if loop.index > 6%}is-hidden-touch{% endif %}">
              {% include "partials/showcase.njk" %}
            </div>
            {% endif %}
            {% endfor %}
          </div>
          <div class="portfolio--center">
            {% for work in collections.work %}
            {% if loop.index % 3 == 0 %}
            <div class="portfolio--item {% if loop.index > 6%}is-hidden-touch{% endif %}">
              {% include "partials/showcase.njk" %}
            </div>
            {% endif %}
            {% endfor %}
          </div>
          <div class="portfolio--right">
            {% for work in collections.work %}
            {% if loop.index % 3 == 2 %}
            <div class="portfolio--item {% if loop.index > 6%}is-hidden-touch{% endif %}">
              {% include "partials/showcase.njk" %}
            </div>
            {% endif %}
            {% endfor %} -->
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="divider"></div> -->
    <!-- lead generator ad section -->
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
import PortfolioShowcase from "@/components/PortfolioShowcase.vue";

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    CtaButton,
    PortfolioShowcase
  },
  data() {
    return {
      page: this.$store.state.pages.portfolio,
      portfolioPosts: this.$store.state.portfolioPosts,
      buttonText: "Jetzt ansehen"
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
