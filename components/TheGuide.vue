<template>
  <section class="is-paddingless" id="guide">
    <div class="section center small">
      <div class="container">
        <div class="level">
          <div class="level-left" data-aos="fade-up" data-aos-duration="600">
            <div class="header is-marginless">
              <h2 class="is-3 title">{{ title }}</h2>
              <p class="subtitle">{{ subtitle }}</p>
            </div>
          </div>
          <div class="level-right" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
    <!-- {% set loopCounter = 0 %}
    {% for work in collections.work %}
    {% if work.featured %}
    {% set loopCounter = loopCounter + 1 %}
    <div class="divider"></div>
    <div class="work">
      <div class="work--left {% if loopCounter % 2 == 0 %}is-right{% endif %}">
        <div class="work--hover-info">
          <span class="work--hover-info-text is-size-4"><b>Verwende X+Scrollen zum Interagieren</b></span>
        </div>
        <div class="work--image-div">
          <picture class="work--image">
            <source srcset="img/1500x.{{ work.image }}.webp" type="image/webp">
            <source srcset="img/1500x.{{ work.image }}.jpg" type="image/jpeg">
            <img src="img/1500x.{{ work.image }}.jpg" alt="{{ work.title }}">
          </picture>
        </div>
      </div>
      <div class="container">
        <div class="work--content" data-aos="fade-up" data-aos-delay="{{ 100 - loopCounter * 100 }}" data-aos-duration="600">
          <div class="columns">
            <div class="column is-4 is-offset-{% if loopCounter % 2 == 0 %}1{% else %}7{% endif %}">
              <h3 class="title is-4">{{ work.title }}</h3>
              <p class="work--text">
                {{ work.description }}
              </p>
              <a href="/referenzen" class="button is-dark is-rounded is-outlined">Alle Referenzen ansehen</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endif %}
    {% endfor %} -->
  </section>
</template>
<script>
import CtaButton from "../components/CtaButton.vue";

export default {
  name: "TheGuide",
  components: {
  	CtaButton
  },
  props: {
    title: {
      required: true
    },
    subtitle: {
      required: true
    }
  }
}
</script>
