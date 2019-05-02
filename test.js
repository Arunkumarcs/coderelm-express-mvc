let isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        console.log(isMomHappy)
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };

            resolve(phone); // fulfilled
        } else {
            isMomHappy = true
            var reason = {
                error: "mom is not happy"
            } // new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error);
            // output: 'mom is not happy'
            
            console.log(isMomHappy)
            willIGetNewPhone.then(function (we) {
            //     // yay, you got a new phone
                console.log(isMomHappy)
                console.log(we);
            //     // output: { brand: 'Samsung', color: 'black' }
            }).catch(function (error) {
                console.log(isMomHappy)
                console.log(error);
            });
        });
};

askMom();