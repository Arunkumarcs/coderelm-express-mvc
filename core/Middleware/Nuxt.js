const { Middleware } = use('Core/');
const NuxtConfig = use('Config/Nuxt');
const {App} = use('Config/');

// Nunjuck Middleware
class Nuxt extends Middleware {
    boot() {
        if(App.assets === "nuxt") {
            this.start();
        }
    }

    async start() {
        const { Nuxt, Builder } = require('nuxt')

        // Init Nuxt.js
        const nuxtJ = new Nuxt(NuxtConfig.options)
    
        // Build only in dev mode
        if (NuxtConfig.dev === true) {
            const builder = new Builder(nuxtJ)
            await builder.build()
        } else {
            await nuxtJ.ready()
        }
    
        // Give nuxt middleware to express
        this.app.use(nuxtJ.render)
    }
  
}
    
module.exports = Nuxt;