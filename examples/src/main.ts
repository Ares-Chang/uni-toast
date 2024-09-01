import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp(): { app: typeof app } {
  const app = createSSRApp(App)
  return {
    app,
  }
}
