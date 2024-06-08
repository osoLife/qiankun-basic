import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
    {
        name: 'react app',
        entry: '//localhost:3001',
        container: '#container',
        activeRule: '/react'
    },
    {
        name: 'vue app',
        entry: '//localhost:3002',
        container: '#container',
        activeRule: '/vue'
    }
])

start()