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

    let offset = $state(("left-" + Math.round(Math.random() * 100)).toString())
</script>

<div class="flex flex-col gap-140">
    <button {onclickcapture} class="flex flex-col">
        {#each cardPile.cards as card (card)}
            <Card
                {card}
            />
        {/each}
    </button>

    <img class="w-32 drop-shadow-md relative {offset}" src="poker-chip.png" alt="chip">
</div>
