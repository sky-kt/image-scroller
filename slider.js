const leftArrowButton = document.getElementById('leftArrow')
const rightArrowButton = document.getElementById('rightArrow')
const focusedImage = document.getElementById('focusedImage')
const imageArray = ['fsociety', 'forest', 'windows11', 'japan']

let imageIndex = 0

const loadImage = (idx) => {
  const desiredImage = imageArray[idx]
  let imageURL

  switch (desiredImage) {
    case 'fsociety':
      console.log('fsociety')
      imageURL = './images/fsociety.jpg'
      break
    case 'forest':
      console.log('forest')
      imageURL = './images/forest.jpeg'
      break
    case 'windows11':
      console.log('windows11')
      imageURL = './images/windows11.jpg'
      break
    case 'japan':
      console.log('japan')
      imageURL = './images/samurai.png'
      break
    default:
      alert(`Image at index ${idx} does not exist`)
      break
  }
  focusedImage.style.backgroundImage = `url(${imageURL})`
}

loadImage(0)

leftArrowButton.addEventListener('click', () => {
  if ((imageIndex - 1) < 0) {
    imageIndex = imageArray.length - 1
  } else imageIndex--
  console.log(imageIndex)
  loadImage(imageIndex)
})

rightArrowButton.addEventListener('click', () => {
  if ((imageIndex + 1) > imageArray.length - 1) {
    imageIndex = 0
  } else imageIndex++
  console.log(imageIndex)
  loadImage(imageIndex)
})
