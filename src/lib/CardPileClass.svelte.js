import {CardClass} from "$lib/CardClass.svelte"
import { ChipPlieClass } from "./ChipPileClass.svelte";

export class CardPileClass {
    shufflesLeft = $state(3);
    chipPile = new ChipPlieClass()

    shuffle = $state(false)
    cooldown = $state(false)

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
            if (card.selected) {
                card.locked = false
                card.cooldown = false
                card.flipping = true
                setTimeout(() => (card.flipped = false), 150)
                setTimeout(() => (card.flipping = false), 300);
                setTimeout(() => (card.selected = false), 450);
            }
        }

        this.shufflesLeft = 3
        setTimeout(() => (this.shuffle = true), 600)
        setTimeout(() => (this.shuffle = false), 1100);
        this.chipPile.resetchips()
    }
}