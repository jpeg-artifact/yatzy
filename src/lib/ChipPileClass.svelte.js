import { ChipClass } from "./ChipClass.svelte";

export class ChipPlieClass {
    chips = [
        new ChipClass(),
        new ChipClass(),
        new ChipClass()
    ]

    resetchips() {
        for (let chip of this.chips) {
            chip.resetchip()
        }
    }
}