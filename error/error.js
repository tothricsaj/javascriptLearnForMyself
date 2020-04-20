function a() {
    return function b() {
        return function c() {
            return function d() {
                return function e() {
                    const f = new Error('Oooopsie')
                    return f
                }
            }
        }
    }
}

function aa() {
    const bb = new Error('Hooopsieeeeee')
    return bb
}

console.log('Call a()')
a()()()()()

console.log('call aa()')
aa()