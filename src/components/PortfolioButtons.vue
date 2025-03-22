<script setup lang="ts">
import GlitchLogo from '@/components/GlitchLogo.vue'
import LinkButton from '@/components/LinkButton.vue'
import PointerButton from '@/components/PointerButton.vue'

const model = defineModel()

function clickRolesManager(): void {
  model.value = 'roles-manager'
}

function clickTaskManager(): void {
  model.value = 'task-manager'
}

function clickDGtek(): void {
  model.value = 'dgtek'
}
function clickPineapple() {
  model.value = 'pineapple'
}

function clearAll() {
  model.value = null
}
</script>

<template>
  <div class="portfolio__container">
    <div class="portfolio-buttons">
      <a
        href="https://garevna.github.io/roles-manager/"
        class="scene"
        data-social="Roles manager"
        target="_blank"
      >
        <div class="cube">
          <span class="icon icon-front normal-fone">
            <img
              src="@/assets/icon-ierarchy.svg"
              alt="Roles manager"
              width="44"
              height="44"
              class="task-manager-icon"
            />
          </span>
          <PointerButton alt="Roles manager" @click="clickRolesManager" />
        </div>
      </a>

      <a href="#" class="scene" data-social="Task manager">
        <div class="cube">
          <span class="icon icon-front normal-fone">
            <img
              src="@/assets/table-edit.svg"
              alt="Task manager"
              width="44"
              height="44"
              class="task-manager-icon"
            />
          </span>
          <PointerButton alt="Task manager" @click="clickTaskManager" />
        </div>
      </a>

      <a href="#" class="scene" data-social="DGtek portal">
        <div class="cube">
          <span class="icon icon-front normal-fone">
            <img
              src="@/assets/dgtek.png"
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
              src="@/assets/pineapple.png"
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
            <img src="@/assets/js-icon.svg" width="48" height="48" alt="js-quiz" class="quiz" />
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
            <img src="@/assets/comics-2.png" width="70" height="70" alt="js-quiz" class="comics" />
          </span>
          <LinkButton alt="Comics" @click="clearAll" />
        </div>
      </a>

      <a href="https://www.npmjs.com/~garevna" class="scene" data-social="npm" target="_blank">
        <div class="cube">
          <span class="icon icon-front black-fone">
            <img src="@/assets/npm.svg" width="64" height="64" alt="js-quiz" class="npm" />
          </span>
          <LinkButton alt="npm registry" @click="clearAll" />
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
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

.task-manager-icon {
  vertical-align: middle;
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
</style>
