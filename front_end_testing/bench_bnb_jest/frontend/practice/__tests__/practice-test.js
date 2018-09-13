import { sum, screamify, quietfy } from '../practice';

describe("Testing simple JS functions", ()=>{

    test("sum takes in two arguments and outputs stuff", () => {
        expect(sum(5,2)).toEqual(7);
    });

    test("screamify takes in a string and transforms it to uppercase", () => {
        expect(screamify('hello')).toBe("HELLO");
    });

    test("quietfy takes in a string and transforms it to lowercase", ()=>{
        expect(quietfy('HELLO')).toEqual('hello');
    });
});