import * as base from '../core/base'

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

    /* Types */
    
    it('should have variable \'varNum\' of type number', () => {
        expect(typeof this.baseObj.varNum).toEqual('number')
    });

    it('should have variable \'varStr\' of type string', () => {
        expect(typeof this.baseObj.varStr).toEqual('string')
    });

    it('should have variable \'varBool\' of type boolean', () => {
        expect(typeof this.baseObj.varBool).toEqual('boolean')
    });

    it('should have variable \'varArr\' of type array', () => {
        expect(this.baseObj.varArr instanceof Array).toEqual(true)
    });

    it('should have variable \'varObj\' of type obj', () => {
        expect(typeof this.baseObj.varObj).toEqual('object')
    });

    it('should have variable \'varAny\' of type any', () => {
        expect(typeof this.baseObj.varAny).toEqual('number'||'string'||'boolean'||'object')
    });

    /* Value Assignment */

    it('should have variable \'varNum\' with value 5', () => {
        expect(this.baseObj.varNum).toEqual(5)
    });

    it('should have variable \'varStr\' with value \'test\'', () => {
        expect(this.baseObj.varStr).toEqual('test')
    });

    it('should have variable \'varBool\' with value true', () => {
        expect(this.baseObj.varBool).toEqual(true)
    });

    it('should have variable \'varArr\' with array []', () => {
        expect(this.baseObj.varArr).toEqual([])
    });

    it('should have variable \'varObj\' of type obj', () => {
        expect(this.baseObj.varObj).toEqual({})
    });

    it('should have variable \'varAny\' of type any', () => {
        expect(this.baseObj.varAny).toEqual(123)
    });

});
