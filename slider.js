const leftArrowButton = document.getElementById('leftArrow')
const rightArrowButton = document.getElementById('rightArrow')
const imageArray = ['fsociety', 'forest', 'windows11', 'japan']

let imageIndex = 0

leftArrowButton.addEventListener('click', () => {
  if ((imageIndex - 1) < 0) {
    imageIndex = imageArray.length - 1
  } else imageIndex--
  console.log(imageIndex)
})

rightArrowButton.addEventListener('click', () => {
  if ((imageIndex + 1) > imageArray.length - 1) {
    imageIndex = 0
  } else imageIndex++
  console.log(imageIndex)
})
