<script>
    import Attribution from "$lib/Attribution.svelte";
    import CardPile from "$lib/CardPile.svelte";
    import { CardPileClass } from "$lib/CardPileClass.svelte";
    import Player from "$lib/Player.svelte";

    let cardPiles = $state([
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass(),
        new CardPileClass()
    ]);
</script>

<div class="flex gap-16">
    <div class="flex gap-8 ml-8">
        {#each cardPiles as cardPile (cardPile)}
            <CardPile {cardPile}></CardPile>
        {/each}
    </div>
    <Player></Player>
</div>

<Attribution></Attribution>
