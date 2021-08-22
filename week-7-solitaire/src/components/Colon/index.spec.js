import Colon from '.';
import { renderWithContexts } from '../../helper';
describe("<Colon/> component",()=>{
    const colonProps={cards:[{suit:"♠",value:"5",isDown:false,id:"5"},{suit:"♠",value:"3",isDown:false,id:"3"}],id:4}
    
    it("should render",()=>{
        const {container}=renderWithContexts(<Colon {...colonProps}/>)
        expect(container.getElementsByClassName("colonWrapper").length).toBe(1)
        // expect(container.querySelector(`#${colonProps}`).length).toBe(1)
        
    })
    it("should render '5 ♠' card",()=>{
        const {container}=renderWithContexts(<Colon {...colonProps}/>)
        expect(container.querySelectorAll(`#card${colonProps.cards[0].id}`).length).toBe(1);
    })
})