const colors = ['violet', 'indigo', 'navy', 'green', 'yellow', 'orange', 'maroon']
const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
  const randomNumber=Math.floor(Math.random()*colors.length)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
  console.log(colors[randomNumber])
})
