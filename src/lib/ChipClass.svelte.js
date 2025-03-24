export class ChipClass {
    visible = $state(true)
    rotation = $state(Math.random() * 360)
    offsetX = $state(Math.random() * 20 - 10)
    offsetY = $state(Math.random() * 10 - 5)

    resetchip() {
        if (!this.visible) {
            this.offsetX = Math.random() * 20 - 10
            this.offsetY = Math.random() * 10 - 5
        }
        this.visible = true
    }
}