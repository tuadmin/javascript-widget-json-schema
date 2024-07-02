import { test } from "./test.js";
test("Verificando si 1 es 1 y demorara 3 segs",async ()=>{
    await new Promise((resolve)=>{
        setTimeout(resolve,3*1000);
    });    
    test.expected(1).toBe(  Math.floor(Math.random() * 3) );
});