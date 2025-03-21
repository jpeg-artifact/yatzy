import {CardClass} from "$lib/CardClass.svelte"

export class CardPileClass {
    shufflesLeft = $state(3);

    cards = [
        new CardClass(),
        new CardClass(),
        new CardClass(),
        new CardClass(),
        new CardClass(),
        new CardClass(),
    ]
}