<script>
    let { card, cardPile } = $props()

    function onclick() {
        if (card.locked || card.cooldown) return
        rotation = Math.random() * 2 - 1
        if (card.selected) {
            cardPile.cooldown = true
            card.flipping = true
            setTimeout(() => (card.flipped = false), 150)
            setTimeout(() => (card.flipping = false), 300);
            setTimeout(() => (cardPile.shuffle = true), 600)
            setTimeout(() => (cardPile.shuffle = false), 1100);
            setTimeout(() => (cardPile.cooldown = false), 1100);
        }
        setTimeout(() => (card.selected = false), 450)
    }

    let rotation = $state(Math.random() * 2 - 1)
</script>

<style>
    .card {
        transform: rotateY(180deg);
		transform-style: preserve-3d;
    }

    .card.flipped {
        transform: rotateY(0deg);
    }

    .front, .back {
        backface-visibility: hidden;
    }

    .back {
        transform: rotateY(180deg);
    }
</style>

<button {onclick} style="rotate: {rotation}deg;" class="card {card.flipped ? "flipped" : ""} {card.flipping ? "scale-110" : ""} aspect-[287/400] h-56 -mb-60 transition-transform duration-300 shadow-md {card.locked || (!card.selected && cardPile.getselectedcardvalue()) != 0 ? "" : "cursor-pointer"} {card.selected ? "translate-y-80" : ""}">
    <img class="back transition-transform duration-300 w-[100%] h-[100%] -mb-56" src="card-back.png" alt={card.number}>
    <img class="front transition-transform duration-300 w-[100%] h-[100%]" src="{card.getcardimg()}" alt={card.number}>
</button>