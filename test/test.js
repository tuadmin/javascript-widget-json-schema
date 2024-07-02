export const tests = new Set();
/**
 * 
 * @param {string} title 
 * @param {Function} callback 
 */
export function test(title,callback){
    tests.add({title,callback});  
}
test.expected = function(value){
    return {
        toBe: function(value2){
            if(value !== value2){
                throw new Error(`${value} is not equal to ${value2}`);
            }
        },
        toEqual: function(value2){
            if(value !== value2){
                throw new Error(`${value} is not equal to ${value2}`);
            }
        },
        toBeGreaterThan: function(value2){
            if(value <= value2){
                throw new Error(`${value} is not greater than ${value2}`);
            }
        },
        toBeLessThan: function(value2){
            if(value >= value2){
                throw new Error(`${value} is not less than ${value2}`);
            }
        },
        toBeGreaterThanOrEqual: function(value2){
            if(value < value2){
                throw new Error(`${value} is not greater than or equal to ${value2}`);
            }
        },
        toBeLessThanOrEqual: function(value2){
            if(value > value2){
                throw new Error(`${value} is not less than or equal to ${value2}`);
            }
        },
        toBeNull: function(){
            if(value !== null){
                throw new Error(`${value} is not null`);
            }
        },
        toBeUndefined: function(){
            if(value !== undefined){
                throw new Error(`${value} is not undefined`);
            }
        },
        toBeTruthy: function(){
            if(!value){
                throw new Error(`${value} is not truthy`);
            }
        },
        toBeFalsy: function(){
            if(value){
                throw new Error(`${value} is not falsy`);
            }
        },
        toBeInstanceOf: function(value2){
            if(!(value instanceof value2)){
                throw new Error(`${value} is not an instance of ${value2}`);
            }
        },
        toHaveLength: function(value2){
            if(value.length !== value2){
                throw new Error(`${value} does not have length ${value2}`);
            }
        },
        toContain: function(value2){
            if(!value.includes(value2)){
                throw new Error(`${value} does not contain ${value2}`);
            }
        },
        toBeNaN: function(){
            if(value !== NaN){
                throw new Error(`${value} is not NaN`);
            }
        },
        toBeFinite: function(){
            if(!Number.isFinite(value)){
                throw new Error(`${value} is not finite`);
            }
        },
        toBeArray: function(){
            if(!Array.isArray(value)){
                throw new Error(`${value} is not an array`);
            }
        },
        toBeObject: function(){
            if(typeof value !== 'object'){
                throw new Error(`${value} is not an object`);
            }
        },
        toBeString: function(){
            if(typeof value !== 'string'){
                throw new Error(`${value} is not a string`);
            }
        },
        toBeNumber: function(){
            if(typeof value !== 'number'){
                throw new Error(`${value} is not a number`);
            }
        },
        toBeBoolean: function(){
            if(typeof value !== 'boolean'){
                throw new Error(`${value} is not a boolean`);
            }
        },
        toBeFunction: function(){
            if(typeof value !== 'function'){
                throw new Error(`${value} is not a function`);
            }
        },
        toBeSymbol: function(){
            if(typeof value !== 'symbol'){
                throw new Error(`${value} is not a symbol`);
            }
        },
        toBeRegExp: function(){
            if(!(value instanceof RegExp)){
                throw new Error(`${value} is not a regular expression`);
            }
        },
        toBeDate: function(){
            if(!(value instanceof Date)){
                throw new Error(`${value} is not a date`);
            }
        },
        toBeError: function(){
            if(!(value instanceof Error)){
                throw new Error(`${value} is not an error`);
            }
        },
        toBeMap: function(){
            if(!(value instanceof Map)){
                throw new Error(`${value} is not a map`);
            }
        },
        toBeSet: function(){
            if(!(value instanceof Set)){
                throw new Error(`${value} is not a set`);
            }
        },
        toBeWeakMap: function(){
            if(!(value instanceof WeakMap)){
                throw new Error(`${value} is not a weak map`);
            }
        },
        toBeWeakSet: function(){
            if(!(value instanceof WeakSet)){
                throw new Error(`${value} is not a weak set`);
            }
        },
        toBePromise: function(){
            if(!(value instanceof Promise)){
                throw new Error(`${value} is not a promise`);
            }
        },
        toBeArrayBuffer: function(){
            if(!(value instanceof ArrayBuffer)){
                throw new Error(`${value} is not an array buffer`);
            }
        },
        toBeDataView: function(){
            if(!(value instanceof DataView)){
                throw new Error(`${value} is not a data view`);
            }
        },
        toBeTypedArray: function(){
            if(!(value instanceof TypedArray)){
                throw new Error(`${value} is not a typed array`);
            }
        },
        toBeInt8Array: function(){
            if(!(value instanceof Int8Array)){
                throw new Error(`${value} is not an int8 array`);
            }
        },
        toBeUint8Array: function(){
            if(!(value instanceof Uint8Array)){
                throw new Error(`${value} is not a uint8 array`);
            }
        },
        toBeUint8ClampedArray: function(){
            if(!(value instanceof Uint8ClampedArray)){
                throw new Error(`${value} is not a uint8 clamped array`);
            }
        },
        toBeInt16Array: function(){
            if(!(value instanceof Int16Array)){
                throw new Error(`${value} is not an int16 array`);
            }
        },
        toBeUint16Array: function(){
            if(!(value instanceof Uint16Array)){
                throw new Error(`${value} is not a uint16 array`);
            }        
        }        
    }

}