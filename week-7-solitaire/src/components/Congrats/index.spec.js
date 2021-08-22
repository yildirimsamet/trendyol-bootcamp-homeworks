import { renderWithContexts } from "../../helper";
import Congrats from ".";

describe("<Congrats/> component",()=>{
    it("should render",()=>{
        const { container } = renderWithContexts(<Congrats/>);
        expect(container.getElementsByClassName("congrats").length).toBe(1)
    })
})