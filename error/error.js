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

a()()()()()