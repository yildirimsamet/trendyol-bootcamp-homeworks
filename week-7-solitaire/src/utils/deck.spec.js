import Deck from './deck';
describe("Deck class",()=>{
    it("should create deck with 104 cards",()=>{
        const deck = new Deck();
        expect(deck.cards.length).toBe(104)
    })
})