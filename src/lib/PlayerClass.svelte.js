import { RowClass } from "./RowClass.svelte"

export class PlayerClass {
    isPlaying = $state(false)
    ones = new RowClass()
    twos = new RowClass()
    threes = new RowClass()
    fours = new RowClass()
    fives = new RowClass()
    sixes = new RowClass()
    samesSum = $derived(this.ones.value + this.twos.value + this.threes.value + this.fours.value + this.fives.value + this.sixes.value)
    bonus = $derived.by(() => {
        if (this.samesSum >= 63) {
            return 50
        } else {
            return 0
        }
    })
    onePair = new RowClass()
    twoPair = new RowClass()
    threeOfAKind = new RowClass()
    fourOfAKind = new RowClass()
    fullHouse = new RowClass()
    littleLadder = new RowClass()
    bigLadder = new RowClass()
    chans = new RowClass()
    yatzy = new RowClass()
    totalSum = $derived(this.ones.value + this.twos.value + this.threes.value + this.fours.value + this.fives.value + this.sixes.value + this.bonus + this.onePair.value + this.twoPair.value + this.threeOfAKind.value + this.fourOfAKind.value + this.fullHouse.value + this.littleLadder.value + this.bigLadder.value + this.chans.value + this.yatzy.value)

    reset() {
        this.ones.value = 0
        this.twos.value = 0
        this.threes.value = 0
        this.fours.value = 0
        this.fives.value = 0
        this.sixes.value = 0
        this.onePair.value = 0
        this.twoPair.value = 0
        this.threeOfAKind.value = 0
        this.fourOfAKind.value = 0
        this.fullHouse.value = 0
        this.littleLadder.value = 0
        this.bigLadder.value = 0
        this.chans.value = 0
        this.yatzy.value = 0
    }
}