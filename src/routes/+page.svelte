<script>
    import Attribution from "$lib/Attribution.svelte";
    import CardPile from "$lib/CardPile.svelte";
    import { game } from "$lib/GameClass.svelte";
    import Player from "$lib/Player.svelte";

    game.nextturn();
</script>

<div class="m-0 h-[100vh] w-[100%] overflow-y-hidden">
    <div class="flex justify-center {game.switchingPlayer ? "cursor-progress" : ""}">
        <div class="flex gap-16">
            <div class="flex gap-8 ml-8">
                {#each game.cardPiles as cardPile (cardPile)}
                    <CardPile {cardPile}></CardPile>
                {/each}
            </div>
            <div class="flex flex-col ">
                {#each game.players as player (player)}
                    <Player {player}></Player>
                {/each}
            </div>
        </div>
    </div>
</div>

<Attribution></Attribution>
