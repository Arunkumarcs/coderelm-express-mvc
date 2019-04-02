class watcher {
    constructor() {
        let self = this
        this._obj = {}

        // default tracker
        this._tracker = function (name, obj, pro, oldVal, newVal) {
            console.log(`the property "${pro}" in  ${name}" is being changed to new value.`)
        }

        // default proxy obj
        this._proxy = function (name) {
            return {
                // Setter
                set(obj, prop, value) {
                    self._tracker(
                        name,
                        obj,
                        prop,
                        obj[prop],
                        value
                    )
                    obj[prop] = value
                    return true
                },
                // Getter
                get(obj, prop) {
                    return obj[prop]
                }
            }
        }
    }
    
    // create proxy for objects
    createProxy(element, name) {
        let self = this
        self[name] = element

        element.getObjectName = function () {
            return name
        }

        return new Proxy(element, self._proxy(name))
    }

    // setters
    set tracker(val) {
        this._tracker = val
    }
    set proxy(val) {
        this._proxy = val
    }
}

// function tracker(name, obj, pro, oldVal, newVal, watcher) {
//     console.log(name)
//     console.log(pro)
//     console.log(oldVal)
//     console.log(newVal)
//     // console.log(this)
// }
// let watchObj = new watcher()
// // watchObj.tracker = tracker

// let p1 = {
//     a: "sdfsef"
// }
// let p2 = {
//     d3: "23qw3"
// }

// p1 = watchObj.createProxy(p1, "p1")
// p2 = watchObj.createProxy(p2, "p2")

// p1.d3 = "sadfsdf"
// p2.d1 = "sadfsdf"
// console.log(p2)
// console.log(watchObj.p2)
// for (const iterator in watchObj) {
//     console.log(iterator)
// }
// console.log(watchObj.constructor.name)

module.exports = watcher