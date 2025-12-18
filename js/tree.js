$(function() {

// --- CONFIGURACIÓN ÁRBOL (Visuales) ---
    const config = {
        lightCount: 66,
        text: "* ABEL * JAVIER * NESTOR*PEDRO*MARCOS*ADRIÁN*KARLA*FOUNEKE*STEFFAN*",
        yStart: 0,
        yEnd: 120,
        radiusStart: 15.25,
        radiusEnd: 0.25,
        rotateStart: 1770,
        rotateStep: 28.8,
    };

    const treeContainer = document.getElementById("tree");
    const msgReversed = config.text.split("").reverse().join("");
    const mapRange = (val, inMin, inMax, outMin, outMax) =>
        ((val - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

    for (let i = 0; i < config.lightCount; i++) {
        const light = document.createElement("div");
        light.className = "tree__light";
        const currentY = mapRange(
            i,
            0,
            config.lightCount,
            config.yStart,
            config.yEnd
        );
        const currentRadius = mapRange(
            i,
            0,
            config.lightCount,
            config.radiusStart,
            config.radiusEnd
        );
        const currentRotate = config.rotateStart - i * config.rotateStep;
        const speed = Math.random() * 10;
        const delay = Math.random() * 10 * -1;
        const appear = i - 11;

        light.style.setProperty("--appear", appear);
        light.style.setProperty("--y", currentY);
        light.style.setProperty("--rotate", currentRotate);
        light.style.setProperty("--radius", currentRadius);
        light.style.setProperty("--speed", speed);
        light.style.setProperty("--delay", delay);

        if (msgReversed[i]) {
            light.style.fontSize = `${(config.lightCount - i) * 0.02 + 1}em`;
            if (msgReversed[i] == "*") {
                light.style.color = "#fff";
                light.style.fontSize = "3em";
            }
            light.innerText = msgReversed[i];
        }
        treeContainer.appendChild(light);
    }

    const starHTML = `
    <svg class="tree__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.32 108.44">
      <path d="M90.19 -245.67L57.12 -262.62 24.4 -245l5.91-36.69L3.44 -307.35l36.72-5.72 16.1-33.5L73.06 -313.4l36.83 4.97-26.35 26.21z"
            fill="none" stroke-width="6.88" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`;
    treeContainer.insertAdjacentHTML("beforeend", starHTML);

    function crearCopo() {
        const copo = document.createElement("div");
        copo.innerHTML = "❄";
        copo.classList.add("copo-nieve");
        copo.style.fontSize = Math.random() * 10 + 10 + "px";
        copo.style.left = Math.random() * 100 + "vw";
        const duracion = Math.random() * 3 + 2 + "s";
        copo.style.animationDuration = duracion;
        copo.style.opacity = Math.random();
        document.body.appendChild(copo);
        setTimeout(() => copo.remove(), parseFloat(duracion) * 1000);
    }
    setInterval(crearCopo, 150);

})