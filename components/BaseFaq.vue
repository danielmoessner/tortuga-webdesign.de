<template>
  <div class="mb-12 faq card border-radius-6" @click="clicked">
    <div ref="question" class="faq--question card-header border-radius-6">
      <div class="card-header-title">
        {{ question }}
      </div>
      <div class="card-header-icon" :style="iconStyle">
        <span class="icon has-text-primary">
          <FontAwesomeIcon icon="angle-down" />
        </span>
      </div>
    </div>
    <div ref="answer" class="faq--answer" :style="{ height: answerHeight }">
      <div class="card-content">
        {{ answer }}
      </div>
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDown)

export default {
  name: "BaseFaq",
  components: {
    FontAwesomeIcon
  },
  props: {
    question: {
      required: true
    },
    answer: {
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    clicked() {
      this.isOpen = this.isOpen ? false : true
    }
  },
  computed: {
    answerHeight() {
      return (this.isOpen && this.$refs.answer) ? this.$refs.answer.scrollHeight + "px" : 0
    },
    iconStyle() {
      return this.isOpen ? { transform: 'scaleY(-1)' } : {}
    }
  }
}

</script>
<style lang="scss">
.border-radius-6 {
  border-radius: 6px;
}

.mb-12 {
  margin-bottom: 1.2rem !important;
}

.faq--answer {
  transition: height 0.6s;
}

.faq {
  overflow: hidden;

  &--question {
    &:hover {
      cursor: pointer;
    }
  }
}

</style>
