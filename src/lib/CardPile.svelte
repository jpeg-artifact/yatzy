<script>
    import Card from "./Card.svelte";
    import ChipPile from "./ChipPile.svelte";

    let { cardPile } = $props();

    function onclickcapture() {
        if (cardPile.shufflesLeft <= 0 || cardPile.cooldown) return;
        for (let card of cardPile.cards) {
            if (card.selected) {
                return;
            }
        }
        cardPile.shufflesLeft--;
        cardPile.chipPile.chips[cardPile.shufflesLeft].visible = false;
        let index = Math.floor(Math.random() * 6);
        let card = cardPile.cards[index];
        card.number = Math.floor(Math.random() * 6 + 1);
        card.cooldown = true;
        setTimeout(() => (card.cooldown = false), 300);
        setTimeout(() => (card.flipped = true), 300);
        setTimeout(() => (card.flipping = true), 150);
        setTimeout(() => (card.flipping = false), 450);

        card.selected = true;
        if (cardPile.shufflesLeft <= 0) card.locked = true;
    }
</script>

<div class="flex flex-col gap-70 sm:gap-140 w-[20%]">
    <button {onclickcapture} class="flex flex-col transition-transform duration-400 {cardPile.shuffle ? '-translate-y-32 md:-translate-y-64' : ''}">
        {#each cardPile.cards as card (card)}
            <Card {card} {cardPile} />
        {/each}
    </button>

    <ChipPile chipPile={cardPile.chipPile}></ChipPile>
</div>
