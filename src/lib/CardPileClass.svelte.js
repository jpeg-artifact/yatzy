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
}