<script lang="ts">
    import Card from "./Card.svelte";

    let { cardPile } = $props();

    function onclickcapture() {
        if (cardPile.shufflesLeft <= 0) return;
        for (let card of cardPile.cards) {
            if (card.selected) {
                return;
            }
        }
        cardPile.shufflesLeft--;
        let index = Math.floor(Math.random() * 6);
        let card = cardPile.cards[index];
        console.log("Pile clicked");
        card.cooldown = true;
        setTimeout(() => (card.cooldown = false), 300);
        card.selected = true;
        if (cardPile.shufflesLeft <= 0) card.locked = true;
    }
</script>

<div class="flex flex-col gap-60">
    <button {onclickcapture} class="flex flex-col">
        {#each cardPile.cards as card (card)}
            <Card
                {card}
            />
        {/each}
    </button>

    <h1 class="text-center">Shuffels left: {cardPile.shufflesLeft}</h1>
</div>
