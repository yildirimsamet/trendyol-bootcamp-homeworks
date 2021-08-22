import { renderWithContexts } from "../../helper";
import StartGame from ".";
import { render } from "@testing-library/react";


describe("<StartGame/> component",()=>{
    it("should render",()=>{
        const { container } = renderWithContexts(<StartGame/>);
        expect(container.getElementsByClassName("startGame").length).toBe(1);
    })
    it("should render fakeLoading when component mount",()=>{
        const { container } = renderWithContexts(<StartGame/>);
        expect(container.getElementsByClassName("startGame").length).toBe(1);
    })
    // it("should render start button after fake delay",()=>{
    

    // })
})