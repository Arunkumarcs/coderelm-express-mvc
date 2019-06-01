module.exports = {
    port: $config.port || 3000,
    debug: $config.debug || false,
    assets: $config.assets || "", // 'es6', 'react', 'angular'
    socket: {
        enabled: true
    },
    db: "sequelizejs" // mongoose, sequelizejs
};