let tester = require('supertest')
let app = require('../app')

describe("homepage", function () {  
    it('Welcome to homepage', function (done) {  
        tester(app).get('/')
            .expect(200)
            .expect(/title/, done)  
    })
})