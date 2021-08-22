import { renderWithContexts } from "./helper";
import App from "./App";
describe("<App /> component",()=>{
    it("should render",()=>{
        const {container}=renderWithContexts(<App/>);
        expect(container.getElementsByClassName("App").length).toBe(1)
    })
})