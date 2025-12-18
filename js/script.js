document.addEventListener("DOMContentLoaded", () => {
    const BPM = 85
    const negra = 60 / BPM
    const blanca = negra * 2
    const redonda = negra * 4
    const corchea = negra / 2
    const corcheaConPuntillo = corchea + (corchea / 2)
    const semicorchea = corchea / 2
    const negraConPuntillo = negra + (negra / 2)

    const ritmo = [
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: negra },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: negra },
        { nota: "SOL", dur: corchea },
        { nota: "SIb", dur: corchea },
        { nota: "MIb", dur: corcheaConPuntillo },
        { nota: "FA", dur: semicorchea },
        { nota: "sol", dur: blanca },
        { nota: "LA b", dur: corchea },
        { nota: "LA b", dur: corchea },
        { nota: "LA b", dur: corcheaConPuntillo },
        { nota: "LA b", dur: semicorchea },
        { nota: "LA b", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "sol", dur: corchea },
        { nota: "SOL", dur: semicorchea },
        { nota: "SOL", dur: semicorchea },
        { nota: "SOL", dur: corchea },
        { nota: "fa", dur: corchea },
        { nota: "fa", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "fa", dur: negra },
        { nota: "SI B", dur: negra },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: negra },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "SOL", dur: negra },
        { nota: "SOL", dur: corchea },
        { nota: "SIb", dur: corchea },
        { nota: "MIb", dur: corcheaConPuntillo },
        { nota: "FA", dur: semicorchea },
        { nota: "sol", dur: blanca },
        { nota: "LA b", dur: corchea },
        { nota: "LA b", dur: corchea },
        { nota: "LA b", dur: corcheaConPuntillo },
        { nota: "LA b", dur: semicorchea },
        { nota: "LA b", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "sol", dur: corchea },
        { nota: "SOL", dur: semicorchea },
        { nota: "SOL", dur: semicorchea },
        { nota: "SOL", dur: corchea },
        { nota: "fa", dur: corchea },
        { nota: "fa", dur: corchea },
        { nota: "SOL", dur: corchea },
        { nota: "fa", dur: blanca },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: negraConPuntillo },
        { nota: "", dur: semicorchea },
        { nota: "", dur: semicorchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: blanca },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: blanca },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: blanca },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: negraConPuntillo },
        { nota: "", dur: semicorchea },
        { nota: "", dur: semicorchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: blanca },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: corchea },
        { nota: "", dur: blanca },
    ]

    let index = 0

    function imprimirNota() {
        const n = ritmo[index % ritmo.length] 
        const ornament = $(`.ornament`)
        const duracion = n.dur

        const numBolas = Math.min(Math.max(Math.round(duracion / negra * 7), 7), 14)

        const indicesAleatorios = []
        while (indicesAleatorios.length < numBolas) {
            const randomIndex = Math.floor(Math.random() * ornament.length)
            if (!indicesAleatorios.includes(randomIndex)) {
                indicesAleatorios.push(randomIndex)
            }
        }

        indicesAleatorios.forEach(i => {
            const bola = $(ornament[i])
            bola.css('filter', 'brightness(1.6)')



            setTimeout(() => bola.css('filter', 'brightness(0.7)'), 100)
        })

        index++

        setTimeout(imprimirNota, n.dur * 1000)
    }

    document.addEventListener("click", () => {
        const music = new Audio("media/song.mp3")
        $('#texto').text('¡DAW2 os desea FELIZ NAVIDAD!')
        music.loop = true
        music.play()
        setTimeout(imprimirNota, 300)
        setTimeout(() => window.location.reload(), 46000)
    }, { once: true })
})