<script>
    import { game } from "./GameClass.svelte";

    let { player } = $props()
    
    function onesclick() {
        if (!player.isPlaying) return

        for (let number of game.getcardnumberarray()) {
            if (number === 1) {
                player.ones += 1
            }
        }

        game.nextturn()
    }
</script>

<style>
    td {
        border-style: var(--tw-border-style);
        border-width: 2px;
        padding: 4px;
        padding-left: 8px;
        padding-right: 32px;
        min-width: 128px;
    }
    h1 {
        font-weight: bold;
    }
</style>

<div class="bg-yellow-50 p-4 float-right shadow-md mt-8">
    <table class="bg-yellow-50 border-4">
        <tbody>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SPELARE</h1> 
                </td>
                <td>
                    <input type="text">
                </td>
                <td></td>
            </tr>
            <tr>
                <td>
                    Ettor 
                </td>
                <td>
                    <button class="w-[100%] h-[100%] {player.isPlaying ? "hover:bg-emerald-200" : ""}" onclick={onesclick}>
                        {player.ones}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Tvåor
                </td>
                <td>
                    {player.twos}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Treor
                </td>
                <td>
                    {player.threes}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Fyror
                </td>
                <td>
                    {player.fours}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Femmor
                </td>
                <td>
                    {player.fives}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Sexor
                </td>
                <td>
                    {player.sixes}
                </td>
                <td></td>
            </tr>
        </tbody>
        <tbody>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SUMMA</h1> 
                </td>
                <td>
                    {player.samesSum}
                </td>
                <td>
                    <p class="text-xs">63 eller mer = bonus</p>
                </td>
            </tr>
            <tr>
                <td>
                    Bonus 
                </td>
                <td>
                    {player.bonus}
                </td>
                <td>
                    <p class="text-xs">50 poäng</p>
                </td>
            </tr>
            <tr>
                <td> 
                    Ett par
                </td>
                <td>
                    {player.onePair}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Två par
                </td>
                <td>
                    {player.twoPair}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Tretal
                </td>
                <td>
                    {player.threeOfAKind}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Fyrtal
                </td>
                <td>
                    {player.fourOfAKind}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Kåk
                </td>
                <td>
                    {player.fullHouse}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Liten stege
                </td>
                <td>
                    {player.littleLadder}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Stor stege
                </td>
                <td>
                    {player.bigLadder}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Chans
                </td>
                <td>
                    {player.chans}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Yatzy
                </td>
                <td>
                    {player.yatzy}
                </td>
                <td>
                    <p class="text-xs">50 poäng</p>
                </td>
            </tr>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SUMMA</h1> 
                </td>
                <td>
                    {player.totalSum}
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
