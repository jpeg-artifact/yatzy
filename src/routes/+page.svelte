<script lang="ts">
    import Attribution from "$lib/Attribution.svelte";
    import CardPile from "$lib/CardPile.svelte";
    import { CardPileClass } from "$lib/CardPileClass.svelte";

    let cardPiles = $state([
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
    ]);
</script>

<div class="flex gap-8 ml-8">
    {#each cardPiles as cardPile (cardPile)}
        <CardPile {cardPile}></CardPile>
    {/each}
</div>

<Attribution></Attribution>
