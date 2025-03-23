export class CardClass {
    number = $state()
    locked = $state()
    cooldown = $state()
    selected = $state()
    flipped = $state()
    flipping = $state()

    getcardimg() {
        if (this.number === 1) {
            return ["clubs-a.png", "hearts-a.png", "diamonds-a.png", "spades-a.png"][Math.floor(Math.random() * 4)]
        }
        else if (this.number === 2) {
            return ["clubs-2.png", "hearts-2.png", "diamonds-2.png", "spades-2.png"][Math.floor(Math.random() * 4)]
        }
        else if (this.number === 3) {
            return ["clubs-3.png", "hearts-3.png", "diamonds-3.png", "spades-3.png"][Math.floor(Math.random() * 4)]
        }
        else if (this.number === 4) {
            return ["clubs-4.png", "hearts-4.png", "diamonds-4.png", "spades-4.png"][Math.floor(Math.random() * 4)]
        }
        else if (this.number === 5) {
            return ["clubs-5.png", "hearts-5.png", "diamonds-5.png", "spades-5.png"][Math.floor(Math.random() * 4)]
        }
        else if (this.number === 6) {
            return ["clubs-6.png", "hearts-6.png", "diamonds-6.png", "spades-6.png"][Math.floor(Math.random() * 4)]
        }
    }
}