<script>
    let { card, cardPile } = $props();

    function onclick() {
        if (card.locked || card.cooldown) return;
        rotation = Math.random() * 2 - 1;
        if (card.selected) {
            cardPile.cooldown = true;
            card.flipping = true;
            setTimeout(() => (card.flipped = false), 150);
            setTimeout(() => (card.flipping = false), 300);
            setTimeout(() => (cardPile.shuffle = true), 600);
            setTimeout(() => (cardPile.shuffle = false), 1100);
            setTimeout(() => (cardPile.cooldown = false), 1100);
        }
        setTimeout(() => (card.selected = false), 450);
    }

    let rotation = $state(Math.random() * 2 - 1);
</script>

<button
    {onclick}
    style="rotate: {rotation}deg;"
    class="card {card.flipped ? 'flipped' : ''} {card.flipping
        ? 'scale-110'
        : ''} aspect-[287/400] w-[100%] -mb-[150%] transition-transform duration-300 shadow-md {card.locked ||
    (!card.selected && cardPile.getselectedcardvalue()) != 0
        ? ''
        : 'cursor-pointer'} {card.selected
        ? 'translate-y-20 sm:translate-y-48'
        : '-translate-y-24 sm:-translate-y-16 md:-translate-y-32 lg:-translate-y-48'}"
>
    <img
        class="back transition-transform absolute duration-300 aspect-[287/400] w-[100%]"
        src="card-back.png"
        alt={card.number}
    />
    <img
        class="front transition-transform absolute duration-300 aspect-[287/400] w-[100%]"
        src={card.getcardimg()}
        alt={card.number}
    />
</button>

<style>
    .card {
        transform: rotateY(180deg);
        transform-style: preserve-3d;
    }

    .card.flipped {
        transform: rotateY(0deg);
    }

    .front,
    .back {
        backface-visibility: hidden;
    }

    .back {
        transform: rotateY(180deg);
    }
</style>
