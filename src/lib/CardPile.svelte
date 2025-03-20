<script lang="ts">
    import Card from "./Card.svelte";

    let shufflesLeft = $state(3)

    let cards = $state([
        { number: 1, selected: false, locked: false, cooldown: false },
        { number: 2, selected: false, locked: false, cooldown: false },
        { number: 3, selected: false, locked: false, cooldown: false },
        { number: 4, selected: false, locked: false, cooldown: false },
        { number: 5, selected: false, locked: false, cooldown: false },
        { number: 6, selected: false, locked: false, cooldown: false }
    ])

    function onclickcapture() {
        if (shufflesLeft <= 0) return
        for (let card of cards) {
            if (card.selected) {
                return
            }
        }
        shufflesLeft--
        let index = Math.floor(Math.random() * 6)
        let card = cards[index]
        console.log("Pile clicked")
        card.cooldown = true
        setTimeout(() => card.cooldown = false, 300)
        card.selected = true
        if (shufflesLeft <= 0) card.locked = true
    }
</script>

<div class="flex flex-col gap-60">
    <button {onclickcapture} class="flex flex-col">
        {#each cards as card (card.number)}
           <Card number={card.number} bind:selected={card.selected} locked={card.locked} cooldown={card.cooldown}/>
        {/each}
   </button>

   <h1 class="text-center">Shuffels left: {shufflesLeft}</h1>
</div>
