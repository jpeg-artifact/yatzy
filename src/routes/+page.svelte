<script>
    import Attribution from "$lib/Attribution.svelte";
    import CardPile from "$lib/CardPile.svelte";
    import { game } from "$lib/GameClass.svelte";
    import Player from "$lib/Player.svelte";

    game.nextturn()
</script>

<div class="flex gap-16">
    <div class="flex gap-8 ml-8">
        {#each game.cardPiles as cardPile (cardPile)}
            <CardPile {cardPile}></CardPile>
        {/each}
    </div>
    {#each game.players as player (player)}
        <Player {player}></Player>
    {/each}
</div>

<Attribution></Attribution>
