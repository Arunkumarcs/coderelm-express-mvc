class watcher {
    constructor() {
        this._obj = {}
        this._tracker = function (name, obj, pro, oldVal, newVal) {
            console.log(`the property "${pro}" in  ${name}" is being changed to new value.`)
        }
    }

    set tracker(val) {
        this._tracker = val
    }

    createProxy(element, name) {
        let self = this
        self[name] = element

        element.getObjectName = function () {
            return name
        }

        return new Proxy(element, {
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
        })
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

module.exports = watcher