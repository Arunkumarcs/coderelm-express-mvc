async function start() {
    let app = await require('./app')();
    await require('./bin/www')(app);
}

start();