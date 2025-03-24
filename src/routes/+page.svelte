<script>
    import Attribution from "$lib/Attribution.svelte";
    import CardPile from "$lib/CardPile.svelte";
    import { game } from "$lib/GameClass.svelte";
    import Player from "$lib/Player.svelte";

    game.nextturn();
</script>

<div class="m-4 {game.switchingPlayer ? "cursor-progress" : ""}">
    <div class="flex gap-16 flex-col lg:flex-row">
        <div class="flex gap-8 w-[100%] lg:w-[65%]">
            {#each game.cardPiles as cardPile (cardPile)}
                <CardPile {cardPile}></CardPile>
            {/each}
        </div>
        <div class="flex flex-col w-[100%] lg:w-[35%]">
            {#each game.players as player (player)}
                <Player {player}></Player>
            {/each}
        </div>
    </div>
</div>

<Attribution></Attribution>
