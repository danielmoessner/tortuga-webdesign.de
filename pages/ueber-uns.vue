<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <!-- intro section -->
    <section id="start" class="small">
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
              <img class="is-rounded" :src="page.about.image" alt="Inhaber">
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
                  <div class="faq--icon">
                    <span class="icon has-text-primary">
                      <FontAwesomeIcon icon="angle-down" />
                    </span>
                  </div>
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
    <TheFooter />
  </main>
</template>
<script>
import TheSubpageHeader from "../components/TheSubpageHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeaderReflection from "../components/TheHeaderReflection.vue";
import CtaButton from "@/components/CtaButton.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDown)

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    CtaButton,
    FontAwesomeIcon
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
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  },
  mounted() {
    // accordion-js/dist/accordion.min.js
    "use strict";!function(i){function u(o,l){var c=this,t={init:function(){if(Array.isArray(o))return o.length&&o.map(function(e){return new u(e,l)}),!1;this.options=h({duration:600,itemNumber:0,aria:!0,closeOthers:!0,showItem:!1,elementClass:"ac",questionClass:"ac-q",answerClass:"ac-a",targetClass:"ac-target",onToggle:function(){}},l),this.container=document.querySelector(o),this.elements=this.container.querySelectorAll("."+this.options.elementClass);var e=this.options,t=e.aria,n=e.showItem,i=e.itemNumber;t&&this.container.setAttribute("role","tablist");for(var s=0;s<this.elements.length;s++){var r=this.elements[s];r.classList.add("js-enabled"),this.hideElement(r),this.setTransition(r),this.generateID(r),t&&this.setARIA(r)}if(n){var a=this.elements[0];"number"==typeof i&&i<this.elements.length&&(a=this.elements[i]),this.toggleElement(a,!1)}c.attachEvents()},setTransition:function(e){var t=this.options,n=t.duration,i=t.answerClass,s=e.querySelector("."+i),r=a("transition");s.style[r]=n+"ms"},generateID:function(e){e.setAttribute("id","ac-".concat(s)),s++},setARIA:function(e){var t=this.options,n=t.questionClass,i=t.answerClass,s=e.querySelector("."+n),r=e.querySelector("."+i);s.setAttribute("role","tab"),s.setAttribute("aria-expanded","false"),r.setAttribute("role","tabpanel")},updateARIA:function(e,t){var n=this.options.questionClass;e.querySelector("."+n).setAttribute("aria-expanded",t)},callSpecificElement:function(e){for(var t=e.target,n=this.options,i=n.questionClass,s=n.targetClass,r=n.closeOthers,a=0;a<this.elements.length;a++)if(this.elements[a].contains(t)){(t.className.match(i)||t.className.match(s))&&(e.preventDefault(),r&&this.closeAllElements(a),this.toggleElement(this.elements[a]));break}},hideElement:function(e){var t=this.options.answerClass;e.querySelector("."+t).style.height=0},toggleElement:function(e,t){var n,i=!(1<arguments.length&&void 0!==t)||t,s=this.options,r=s.answerClass,a=s.aria,o=s.onToggle,l=e.querySelector("."+r),c=l.scrollHeight;e.classList.toggle("is-active"),i||(l.style.height="auto"),0<parseInt(l.style.height)?(n=!1,requestAnimationFrame(function(){l.style.height=0})):(n=!0,requestAnimationFrame(function(){l.style.height=c+"px"})),a&&this.updateARIA(e,n),i&&o(e,this.elements)},closeAllElements:function(e){for(var t=this.options.aria,n=this.elements.length,i=0;i<n;i++)if(i!=e){var s=this.elements[i];s.classList.contains("is-active")&&s.classList.remove("is-active"),t&&this.updateARIA(s,!1),this.hideElement(s)}},resizeHandler:function(){for(var e,t,n=this.options,i=n.elementClass,s=n.answerClass,r=this.container.querySelectorAll("."+i+".is-active"),a=0;a<r.length;a++)t=r[a].querySelector("."+s),requestAnimationFrame(function(){t.style.height="auto",e=t.offsetHeight,requestAnimationFrame(function(){t.style.height=e+"px"})})},clickHandler:function(e){this.callSpecificElement(e)},keydownHandler:function(e){13===e.keyCode&&this.callSpecificElement(e)}};this.attachEvents=function(){var e=t;e.clickHandler=e.clickHandler.bind(e),e.keydownHandler=e.keydownHandler.bind(e),e.resizeHandler=e.resizeHandler.bind(e),e.container.addEventListener("click",e.clickHandler),e.container.addEventListener("keydown",e.keydownHandler),i.addEventListener("resize",e.resizeHandler)},this.detachEvents=function(){var e=t;e.container.removeEventListener("click",e.clickHandler),e.container.removeEventListener("keydown",e.keydownHandler),i.removeEventListener("resize",e.resizeHandler)};var a=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=n(e),e="webkit".concat(e))},n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},h=function(e,t){for(var n in t)e[n]=t[n];return e};i.requestAnimationFrame=i.requestAnimationFrame||i.webkitRequestAnimationFrame||function(e){i.setTimeout(e,1e3/60)},t.init()}var s=0;"undefined"!=typeof module&&void 0!==module.exports?module.exports=u:i.Accordion=u}(window);
    
    new Accordion('.faq-container', {
      elementClass: 'faq',
      questionClass: 'faq--question',
      answerClass: 'faq--answer',
      closeOthers: false
    })
  }
}

</script>


<style lang="scss">
#ueber-uns {
    img {
      max-width: 500px;
      margin: 0 auto;
    }
    @include until($tablet) {
      .columns {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
  .icons-box {
  .fa-stack i:nth-child(2) {
    margin-left: 3px;
  }
  .icon {
    margin-right: 0.3rem;
  }
  a {
    color: $dark;
    &:hover {
      color: $primary;
    }
  }
}
.faq {
  @extend .card;
  overflow: hidden;
  margin-bottom: 1.2rem;
  &--question {
    @extend .card-header;
    &:hover {
      cursor: pointer;
    }
  }
  &--question-title {
    @extend .card-header-title;
  }
  &--icon {
    @extend .card-header-icon;
  }
  &--answer {
    height: 0;
  }
  &--answer-text {
    @extend .card-content;
  }
  &.is-active {
    .faq--icon {
      transform: scaleY(-1);
    }
  }
}
</style>