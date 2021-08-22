import { renderWithContexts } from "../../../helper";
import OtherCards from ".";
import { fireEvent } from "@testing-library/react";
describe("<OtherCards/> component",()=>{
    const mockOtherCards=[
       [{suit:"♠",value:"6"},{suit:"♠",value:"2"},{suit:"♠",value:"7"}],
       [{suit:"♠",value:"5"},{suit:"♠",value:"9"},{suit:"♠",value:"3"}],
    ]
    it("should render",()=>{
        const { container } = renderWithContexts(<OtherCards/>);
        expect(container.getElementsByClassName("otherCards").length).toBe(1)
    })
    it("should show 2",()=>{
        const {container}=renderWithContexts(<OtherCards otherCards={mockOtherCards} />)
        expect(container.querySelector(".otherCards span")).toHaveTextContent("2")
    })
    it("should call function when clicked",()=>{
        const mockFunction=jest.fn()
        const {container}=renderWithContexts(<OtherCards distributeCards={mockFunction} />)
        fireEvent.click(container.getElementsByClassName("otherCards")[0])
        expect(mockFunction).toBeCalled()
    })
})