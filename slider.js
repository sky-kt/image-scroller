const leftArrowButton = document.getElementById('leftArrow')
const statusContainer = document.getElementById('statusContainer')
const rightArrowButton = document.getElementById('rightArrow')
const slideContainer = document.getElementById('slideContainer')
const imageArray = ['fsociety', 'forest', 'windows11', 'japan']

let imageIndex = 0

for (const image in imageArray) {
  const status = document.createElement('div')
  status.classList.add('status')
  const statusID = `status_${image}`
  status.setAttribute('id', statusID)
  const statusText = document.createTextNode(1 + parseInt(image))
  status.appendChild(statusText)
  status.addEventListener('click', () => {
    alert(image)
  })
  statusContainer.appendChild(status)
}

const updateStatus = (idx) => {
  const allStatuses = Array.from(statusContainer.children)
  const statusToUpdate = allStatuses[idx]
  for (const status in allStatuses) {
    if (allStatuses[status] !== statusToUpdate || allStatuses[status].classList.contains('darkStatus')) {
      allStatuses[status].classList.remove('darkStatus')
    } else {
      allStatuses[status].classList.add('darkStatus')
    }
  }
}

const removeImage = (direction) => {
  const imageToRemove = slideContainer.lastChild
  if (direction === 'left') {
    imageToRemove.classList.add('leavingRight')
  } else imageToRemove.classList.add('leavingLeft')
  setTimeout(() => {
    console.log(slideContainer.childNodes)
    slideContainer.removeChild(imageToRemove)
  }, 2100)
}

const loadImage = (idx, direction) => {
  const imgName = imageArray[idx]
  const imageDOM = document.createElement('div')
  let imageURL

  switch (imgName) {
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

  imageDOM.style.backgroundImage = `url(${imageURL})`

  if (direction === 'right') {
    imageDOM.classList.add('image', 'enteringRight')
  } else imageDOM.classList.add('image', 'enteringLeft')

  slideContainer.appendChild(imageDOM)
}

loadImage(0)

leftArrowButton.addEventListener('click', () => {
  if ((imageIndex - 1) < 0) {
    imageIndex = imageArray.length - 1
  } else imageIndex--
  console.log(imageIndex)
  removeImage('left')
  loadImage(imageIndex, 'left')
  updateStatus(imageIndex)
})

rightArrowButton.addEventListener('click', () => {
  if ((imageIndex + 1) > imageArray.length - 1) {
    imageIndex = 0
  } else imageIndex++
  console.log(imageIndex)
  removeImage('right')
  loadImage(imageIndex, 'right')
  updateStatus(imageIndex)
})
