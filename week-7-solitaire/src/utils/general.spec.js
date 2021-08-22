import { ValueToShow , TimeConverter } from './general';
describe("General Util Functions",()=>{
    it("should return convert 13 12 11 1 to K Q J A",()=>{
        const values = ["13","12","11","1"];
        const expectedReturns = ["K","Q","J","A"];
        values.forEach((value,index)=>{
            expect(ValueToShow(value)).toBe(expectedReturns[index])
        })
    })
    it("should convert seconds to HH:MM:SS format",()=>{
        const seconds=["100","200"];
        const expectedFormats=["01:40","03:20"];
        seconds.forEach((second,index)=>{
            expect(TimeConverter(second)).toBe(expectedFormats[index])
        })
    })
})