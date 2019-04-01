class ProxyHandler 
{
    // Setter
    set(obj, prop, value) 
    {
        obj[prop] = value
    }

    // Getter
    get(obj, prop) 
    {
        return obj[prop]
    }
}

module.exports = new ProxyHandler()