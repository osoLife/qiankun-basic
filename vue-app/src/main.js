import { createApp } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    app = createApp(App)
    app.mount('#app')
} else {
    renderWithQiankun({
        bootstrap() { },
        mount(props) {
            app = createApp(App)
            app.mount(props.container.querySelector('#app'))
        },
        update() { },
        unmount() {
            app.unmount()
        }
    })
}


