const areAllSameValues = require('./solution')

describe('are all values in this object the same?', ()=>{
    it('should take a multidimensional object with an n amount of values that arent the same and output false',()=>{
        const input = {
            a: 1,
            b: 2,
            c: {
                a1: 1,
                b1: 2,
                c1: 1,
                d1: {
                    a2: 1
                }
            }
        }
        expect(areAllSameValues(input)).toBe(false)
    })
    it('should take a multidimensional object with all values the same and output true',()=>{
        const input = {
            a: 2,
            b: 2,
            c: {
                a1: 2,
                b1: 2,
                c1: 2,
                d1: {
                    a2: 2
                }
            }
        }
        expect(areAllSameValues(input)).toBe(true)
    })
})