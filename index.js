const loadText = document.querySelectorAll(".loading-text")[0]
const bg = document.querySelectorAll(".bg")[0]

let load = 0
let inter = setInterval(blurring, 30)
function blurring() {
  load++
  console.log(load)
  if (load > 99) {
    clearInterval(inter)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }
}
