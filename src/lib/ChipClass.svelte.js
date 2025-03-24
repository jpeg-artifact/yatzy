export class ChipClass {
    visible = $state(true)
    rotation = $state(Math.random() * 360)
    offsetX = $state(Math.random() * 4 - 2)
    offsetY = $state(Math.random() * 2 - 1)

    resetchip() {
        if (!this.visible) {
            this.offsetX = Math.random() * 4 - 2
            this.offsetY = Math.random() * 2 - 1
        }
        this.visible = true
    }
}