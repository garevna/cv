<script setup lang="ts">
import GlitchLogo from '@/components/GlitchLogo.vue'
import LinkButton from '@/components/LinkButton.vue'
import PointerButton from '@/components/PointerButton.vue'

import { portfolioProjects, type PortfolioProject } from '@/configs/portfolio-projects'

const model = defineModel()

/**
 * Vite rewrites `src="@/assets/x.svg"` at build time, which only works when the
 * path is written out in the template. A tile's logo comes from data, so the
 * assets are collected here instead and looked up by file name — the same
 * hashing and inlining, resolved at build time either way.
 */
const logos = import.meta.glob('@/assets/*', { eager: true, import: 'default' }) as Record<
  string,
  string
>

function logoUrl(file: string): string {
  const match = Object.keys(logos).find((path) => path.endsWith('/' + file))
  return match ? logos[match] : ''
}

/**
 * A tile either opens a description or is nothing but a link out. The ones
 * without a description clear the selection, so pressing a plain link closes
 * whatever was open rather than leaving it under an unrelated project.
 */
function select(project: PortfolioProject): void {
  model.value = project.selects ?? null
}
</script>

<template>
  <div class="portfolio__container">
    <div class="portfolio-buttons">
      <a
        v-for="project in portfolioProjects"
        :key="project.label"
        :href="project.href"
        class="scene"
        :data-social="project.label"
        :target="project.href === '#' ? undefined : '_blank'"
      >
        <div class="cube">
          <span class="icon icon-front" :class="project.fone">
            <GlitchLogo
              v-if="project.logo === 'glitch'"
              :style="{ width: project.width + 'px', height: project.height + 'px' }"
            />
            <img
              v-else
              :src="logoUrl(project.logo)"
              :alt="project.alt ?? project.label"
              :width="project.width"
              :height="project.height"
              :class="project.imageClass"
            />
          </span>
          <PointerButton
            v-if="project.selects"
            :alt="project.buttonLabel ?? project.label"
            @click="select(project)"
          />
          <LinkButton v-else :alt="project.buttonLabel ?? project.label" @click="select(project)" />
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
