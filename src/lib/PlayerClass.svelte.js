import { game } from "./GameClass.svelte"

export class PlayerClass {
    isPlaying = $state(false)
    ones = $state(0)
    twos = $state(0)
    threes = $state(0)
    fours = $state(0)
    fives = $state(0)
    sixes = $state(0)
    samesSum = $derived(this.ones + this.twos + this.threes + this.fours + this.fives + this.sixes)
    bonus = $state(0)
    onePair = $state(0)
    twoPair = $state(0)
    threeOfAKind = $state(0)
    fourOfAKind = $state(0)
    fullHouse = $state(0)
    littleLadder = $state(0)
    bigLadder = $state(0)
    chans = $state(0)
    yatzy = $state(0)
    totalSum = $derived(this.ones + this.twos + this.threes + this.fours + this.fives + this.sixes + this.bonus + this.onePair + this.twoPair + this.threeOfAKind + this.fourOfAKind + this.fullHouse + this.littleLadder + this.bigLadder + this.chans + this.yatzy)
}