const faker = require('faker');
let App = null;
let sessionObj = null;
let sessionId = null;

describe('User CRUD', () => {
    /**
     * Load App
     */
    test('Load App', async () => {
        App = await require('../../app')()
        sessionObj = use('Library/ApiSession');
        sessionObj = new sessionObj(faker.random.uuid());
    });

    /**
     * Create new session
     */
    test('create new session', async () => {
        let create = await sessionObj.form();
        expect(create).not.toBeNull();
        expect(create.dataValues.id).toBeDefined();
        sessionId = create.dataValues.id;
        expect(create._options.isNewRecord).toBeTruthy();
    });

    describe('After Session Created', () => {
        /**
         * Find Session
         */
        test('Find session', async () => {
            let sessionExist = await sessionObj.check();
            expect(sessionExist).not.toBeNull();
            expect(sessionExist.id).toBeDefined();
            expect(sessionExist.id).toEqual(sessionId);
        });

        describe('After session found', () => {
            let sessionTestData = {
                test: "sessiondata"
            };

            /**
             * Add data to session
             */
            test('Add data to session', async () => {
                let sessionExist = await sessionObj.renew(sessionTestData);
                expect(sessionExist).not.toBeNull();
            });

            /**
             * Get session data
             */
            test('Get data from session', async () => {
                let sessionExist = await sessionObj.pull();
                expect(sessionExist).not.toBeNull();
                expect(sessionExist).toEqual(sessionTestData);
            });

            /**
             * Remove session
             */
            test('Remove session', async () => {
                let sessionExist = await sessionObj.remove();
                expect(sessionExist).toBe(1);
            }); 
        });
    });
});   
