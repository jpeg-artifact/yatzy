<script lang="ts">
    import Card from "./Card.svelte";
    import ChipPile from "./ChipPile.svelte";

    let { cardPile } = $props();

    function onclickcapture() {
        if (cardPile.shufflesLeft <= 0) return;
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
        console.log("Pile clicked");
        card.cooldown = true;
        setTimeout(() => (card.cooldown = false), 300);
        card.selected = true;
        if (cardPile.shufflesLeft <= 0) card.locked = true;
    }
</script>

<div class="flex flex-col gap-140">
    <button {onclickcapture} class="flex flex-col">
        {#each cardPile.cards as card (card)}
            <Card {card} />
        {/each}
    </button>

    <ChipPile chipPile={cardPile.chipPile}></ChipPile>
</div>
