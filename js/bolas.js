$(function () {

    let $container = $('#balls')
    const minDist = $container.width() / 4
    const minDist2 = minDist * minDist

    const width = $container.width()
    const height = $container.height()

    const colors = [
        "#005e66", "#ee192c", "#00894e", "#ee192c",
        "#ee192c", "#005e66", "#f55c32", "#005e66",
        "#f55c32", "#f55c32", "#ffc646", "#00894e",
        "#ffc646", "#ffc646"
    ]
    
    const balls = []

    const random = (max) => Math.floor(Math.random() * (max - minDist) + minDist / 2)


    const isValidPosition = function (x, y) {
        let valid = true

        $.each(balls, function (_, b) {
            const dx = x - b.x
            const dy = y - b.y
            if (dx * dx + dy * dy < minDist2) {
                valid = false
                return false
            }
        })

        return valid
    }

    $.each(colors, function (i, c) {

        if (i == 7) $container = $('#balls2')

        let x, y

        do x = random(width) , y = random(height)
        while (!isValidPosition(x, y))

        $container.append(
            $('<div>', {
                class: 'ornament',
                css: { transform: `translate(${x}px, ${y}px)`, backgroundColor: `${c}` }
            }).append($('<div>', { class: 'hook' }))
        )

        balls.push({ x, y })
    })
})