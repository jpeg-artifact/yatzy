import { PlayerClass } from "$lib/PlayerClass.svelte";
import { CardPileClass } from "$lib/CardPileClass.svelte";

export class GameClass {
    cardPiles = $state([
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass()
    ]);

    players = $state([
        new PlayerClass(),
        new PlayerClass()
        ])

    turn = $state(30)
    gameOver = $derived.by(() => {
        if (this.turn >= 15 * this.players.length + 1) {
            return true
        } else {
            return false
        }
    })
    switchingPlayer = $state(false)

    nextturn() {
        this.switchingPlayer = true
        this.players[this.turn % this.players.length].isPlaying = false
        this.turn++
        this.players[this.turn % this.players.length].isPlaying = true

        for (let cardPile of this.cardPiles) {
            cardPile.resetcards()
        }

        setTimeout(() => (this.switchingPlayer = false), 1500);
    }

    resetgame() {
        this.turn = 0
        for (let player of this.players) {
            player.reset()
        }
        this.nextturn()
    }

    getcardnumberarray() {
        let numberArray = []

        for (let cardPile of this.cardPiles) {
            numberArray.push(cardPile.getselectedcardvalue())
        }

        return numberArray.sort()
    }
}

export const game = new GameClass()