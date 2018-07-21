import * as base from '../core-fundamentals/base'

describe('base', () => {
    let baseObj : base.FunBase

    beforeAll(() => {
        this.baseObj = new base.FunBase()
    })

    it('should be true', () => {
        expect(true).toBe(true)
    });

    it('should have class named \'FunBase\'', () => {
        expect(base.FunBase).toBeTruthy()
    });

    it('should have variable \'a\' with value 5', () => {
        expect(this.baseObj.a).toEqual(5)
    });

    it('should have variable \'b\' with value \'test\'', () => {
        expect(this.baseObj.b).toEqual('test')
    });
});
