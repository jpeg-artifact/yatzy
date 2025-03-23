import { game } from "./GameClass.svelte"
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
    bonus = new RowClass()
    onePair = new RowClass()
    twoPair = new RowClass()
    threeOfAKind = new RowClass()
    fourOfAKind = new RowClass()
    fullHouse = new RowClass()
    littleLadder = new RowClass()
    bigLadder = new RowClass()
    chans = new RowClass()
    yatzy = new RowClass()
    totalSum = $derived(this.ones.value + this.twos.value + this.threes.value + this.fours.value + this.fives.value + this.sixes.value + this.bonus.value + this.onePair.value + this.twoPair.value + this.threeOfAKind.value + this.fourOfAKind.value + this.fullHouse.value + this.littleLadder.value + this.bigLadder.value + this.chans.value + this.yatzy.value)
}