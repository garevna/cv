<script setup lang="ts">
import Portal from '../components/Portal.vue'
import Pineapple from '../components/Pineapple.vue'
import GlitchLogo from '../components/GlitchLogo.vue'
import PointerButton from '../components/PointerButton.vue'
import LinkButton from '../components/LinkButton.vue'

import { ref } from 'vue'

let showDGtek = ref(false)
let showPineapple = ref(false)

const backgroundImage1 = ref(`url(${import.meta.env.BASE_URL}images/dgtek.png)`)
const backgroundImage2 = ref(`url(${import.meta.env.BASE_URL}images/pineapple.png)`)
const backgroundImage3 = ref(`url(${import.meta.env.BASE_URL}images/js-lessons.gif)`)
const backgroundImage4 = ref(`url(${import.meta.env.BASE_URL}images/JS.gif)`)
const backgroundImage5 = ref(`url(${import.meta.env.BASE_URL}images/comics.png)`)
const backgroundImage6 = ref(`url(${import.meta.env.BASE_URL}images/npm.svg)`)

function clickDGtek(): void {
  showDGtek.value = !showDGtek.value
  showPineapple.value = showDGtek.value ? false : showPineapple.value
}
function clickPineapple() {
  showPineapple.value = !showPineapple.value
  showDGtek.value = showPineapple.value ? false : showDGtek.value
}

function clearAll() {
  showDGtek.value = false
  showPineapple.value = false
}
</script>

<template>
  <main>
    <div class="portfolio__container">
      <div class="portfolio-buttons">
        <a href="#" class="scene" data-social="DGtek portal">
          <div class="cube">
            <span class="icon icon-front normal-fone">
              <img
                src="../assets/dgtek.png"
                alt="DGtek logo"
                width="64"
                heigh="48"
                class="dgtek-icon"
              />
            </span>
            <PointerButton alt="DGtek portal" @click="clickDGtek" />
          </div>
        </a>

        <a href="#" class="scene" data-social="Pineapple CMS">
          <div class="cube">
            <span class="icon icon-front black-fone">
              <img
                src="../assets/pineapple.png"
                alt="Pineapple logo"
                width="44"
                height="44"
                class="pineapple-icon"
              />
            </span>
            <PointerButton alt="Pineapple CMS" @click="clickPineapple" />
          </div>
        </a>

        <a
          href="https://garevna.github.io/js-lessons/"
          class="scene"
          data-social="JS-lessons"
          target="_blank"
        >
          <div class="cube">
            <span class="icon icon-front">
              <GlitchLogo style="width: 70px; height: 70px" />
            </span>
            <LinkButton alt="JS lessons" @click="clearAll" />
          </div>
        </a>

        <a
          href="https://garevna.github.io/js-quiz/"
          class="scene"
          data-social="JS-quiz"
          target="_blank"
        >
          <div class="cube">
            <span class="icon icon-front black-fone">
              <img src="../assets/js-icon.svg" width="48" height="48" alt="js-quiz" class="quiz" />
            </span>
            <LinkButton alt="JS quiz" @click="clearAll" />
          </div>
        </a>

        <a
          href="https://garevna.github.io/comics/"
          class="scene"
          data-social="comics"
          target="_blank"
        >
          <div class="cube">
            <span class="icon icon-front black-fone">
              <img
                src="../assets/comics-2.png"
                width="70"
                height="70"
                alt="js-quiz"
                class="comics"
              />
            </span>
            <LinkButton alt="Comics" @click="clearAll" />
          </div>
        </a>

        <a href="https://www.npmjs.com/~garevna" class="scene" data-social="npm" target="_blank">
          <div class="cube">
            <span class="icon icon-front black-fone">
              <img src="../assets/npm.svg" width="64" height="64" alt="js-quiz" class="npm" />
            </span>
            <LinkButton alt="npm registry" @click="clearAll" />
          </div>
        </a>
      </div>
    </div>

    <hr />

    <div v-if="!showDGtek && !showPineapple" class="tablo">
      <h4>Projects</h4>
    </div>
    <Portal :isActive="showDGtek" />
    <Pineapple :isActive="showPineapple" />
  </main>
</template>

<style sccs scoped>
.portfolio__container {
  max-width: 100vw;
}

.portfolio-buttons {
  height: max-content;
  margin: 48px 0;
  max-width: 100vw;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  justify-items: center;
  row-gap: 16px;
}

.dgtek-icon,
.pineapple-icon,
.quiz,
.comics,
.npm {
  vertical-align: middle;
  margin-top: -8px;
}

.portfolio-buttons .scene {
  float: left;
  text-decoration: none;
  margin: 0 8px;
}

.portfolio-buttons .icon {
  display: block;
  line-height: 70px;
  text-align: center;
  font-size: 2.2em;
  color: var(--vt-c-black);
  outline: 1px solid var(--vt-c-black-light);
}
.normal-fone {
  background: var(--vt-c-body-back);
}
.black-fone {
  background: #000;
}

.portfolio-buttons .icon-back {
  font-size: 1.6em;
  background: var(--vt-c-body-back);
}

.portfolio-buttons .scene {
  width: 80px;
  height: 80px;
  perspective: 800px;
  user-select: none;
}

.portfolio-buttons .cube {
  position: relative;
  width: 72px;
  height: 72px;
  transform-style: preserve-3d;
  transition: 0.5s all;
  user-select: none;
}

.scene:hover .cube,
.scene:active .cube {
  transform: rotateX(90deg);
  user-select: none;
}

.portfolio-buttons .icon-front {
  position: absolute;
  width: 100%;
  transform: rotateX(0deg) translate3d(0px, 0px, 35px);
}

.portfolio-buttons .icon-back {
  position: absolute;
  width: 100%;
  transform: rotateX(-90deg) translate3d(0px, 0px, 35px);
}

div.tablo {
  width: 320px;
  height: 320px;
  border-radius: 1em;
  perspective: 600px;
  background: #ddd;
  border: solid 1px #eee;
  box-shadow:
    0 0.125em 0.3125em rgba(0, 0, 0, 0.25),
    0 0.02125em 0.06125em rgba(0, 0, 0, 0.25);
}

div.tablo::before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 0 0 1em 1em;
  width: 100%;
  height: 50%;
  transform-origin: center top;
  transform: rotateX(180deg);
  background: #ddd;
  border: solid 1px #eee;
  transition: 0.7s ease-in-out transform;
  background-repeat: no-repeat;
  background-size: 80px;
  background-position: center;
  animation: rotor 24s infinite;
}

@keyframes rotor {
  0% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage1);
  }
  6% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage1);
  }
  12% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage1);
  }
  16% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage2);
  }
  22% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage2);
  }
  28% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage2);
  }
  32% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage3);
  }
  38% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage3);
  }
  44% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage3);
  }
  50% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage4);
  }
  56% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage4);
  }
  62% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage4);
  }
  66% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage5);
  }
  72% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage5);
  }
  78% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage5);
  }
  82% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage6);
  }
  88% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage6);
  }
  94% {
    transform: rotateX(0deg);
    background-image: v-bind(backgroundImage6);
  }
  100% {
    transform: rotateX(180deg);
    background-image: v-bind(backgroundImage1);
  }
}

.tablo h4 {
  margin: 16px 24px;
}
</style>
