import {CardClass} from "$lib/CardClass.svelte"
import { ChipPlieClass } from "./ChipPileClass.svelte";

export class CardPileClass {
    shufflesLeft = $state(3);
    chipPile = new ChipPlieClass()

    cards = [
        new CardClass(),
        new CardClass(),
        new CardClass(),
        new CardClass(),
        new CardClass(),
        new CardClass(),
    ]

    getselectedcardvalue() {
        for (let card of this.cards) {
            if (card.selected) {
                return card.number
            }
        }

        return 0
    }

    resetcards() {
        for (let card of this.cards) {
            card.selected = false
            card.locked = false
            card.cooldown = false
        }

        this.shufflesLeft = 3
        this.chipPile.resetchips()
    }
}