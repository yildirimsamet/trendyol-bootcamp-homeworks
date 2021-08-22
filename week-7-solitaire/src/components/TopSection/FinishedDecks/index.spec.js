import FinishedDecks from '.';
import {renderWithContexts} from '../../../helper';
describe("<FinishedDecks/>",()=>{
   it("should render",()=>{
    const {container}=renderWithContexts(<FinishedDecks/>);
    expect(container.getElementsByClassName("finishedDecks").length).toBe(1)
   })
   it("should render 2 finished decks",()=>{
    const {container}=renderWithContexts(<FinishedDecks finishedDecks={2}/>);
    expect(container.getElementsByClassName("finishDeckCard").length).toBe(2)
   })
   it("should render 6 unFinished decks",()=>{
    const {container}=renderWithContexts(<FinishedDecks finishedDecks={2}/>);
    expect(container.getElementsByClassName("emptyCardPlaceHolder").length).toBe(6)
   })
})