export class RowClass {
    value = $state(0)
    display = $derived.by(() => {
        if (this.crossed) {
            return "-"
        } else {
            return this.value
        }
    })
    crossed = $state(false)
}