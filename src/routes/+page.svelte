<script>
    import Attribution from "$lib/Attribution.svelte";
    import CardPile from "$lib/CardPile.svelte";
    import { game } from "$lib/GameClass.svelte";
    import Player from "$lib/Player.svelte";

    function resetonclick() {
        game.resetgame()
    }

    game.nextturn();
</script>

<div class="m-4 {game.switchingPlayer ? 'cursor-progress' : ''}">
    <div class="flex gap-16 flex-col sm:flex-row">
        {#if !game.gameOver}
            <div class="flex gap-8 w-[100%] sm:w-[65%]">
                {#each game.cardPiles as cardPile (cardPile)}
                    <CardPile {cardPile}></CardPile>
                {/each}
            </div>
        {/if}
        {#if game.gameOver}
            <button onclick={resetonclick} class="border-4 opacity-50 border-emerald-900 rounded-2xl cursor-pointer">
                <h1 class="font-bold text-4xl opacity-90 text-emerald-900">Starta om</h1>
            </button>
        {/if}
        <div class="ml-auto mr-auto flex {game.gameOver ? "flex-row w-[100%] justify-center flex-wrap" : "flex-col w-[100%] sm:w-[35%]"}">
            {#each game.players as player (player)}
                <Player {player}></Player>
            {/each}
        </div>
    </div>
</div>

<Attribution></Attribution>
