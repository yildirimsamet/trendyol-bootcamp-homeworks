import { renderWithContexts } from "../../helper";
import Board from ".";

describe("<Board/> component",()=>{
    it("should render",()=>{
        const { container } = renderWithContexts(<Board/>)
        expect(container.getElementsByClassName("boardWrapper").length).toBe(1)
    })
})