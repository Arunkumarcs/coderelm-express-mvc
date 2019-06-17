const authorizer = use('Api/Includes/auth');
var TestModel = use('Model/Test');
var count  = 0

module.exports = {
    Query: {

        /**
         * 
         * @param {*} parent 
         * @param {*} args 
         * @param {*} param2 
         * @param {*} info 
         */
        async hello(
            parent, 
            args, 
            { 
                req,
                token = "",
                ip = ""
            }, 
            info
        ) {  
            // count++;
            // var silence = new TestModel({ name: 'Silence'+count });
            // silence = await silence.save();
            // console.log(silence);

            // token = await authorizer.isValid(token, ip, true);
            return "asdsa"
        }
    }
}