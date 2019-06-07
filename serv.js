async function start() {
    let {
        app,
        models
    } = await require('./app')();
    
    console.log('s2')
    // await require('./bin/www')(
    //     app,
    //     models
    // );
}

start()