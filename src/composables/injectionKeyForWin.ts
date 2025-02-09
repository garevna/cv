import type { InjectionKey, Reactive } from 'vue'

export const injectionKeyForWin = Symbol.for('win-params') as InjectionKey<
  Reactive<{ width: number; height: number }>
>
