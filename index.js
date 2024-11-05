
document.getElementById('tgbtn').onclick = () => {
   let tog = document.querySelector('.dropdown')

   if (tog.classList.contains('enable')) {
      document.getElementById('tgbtn').innerHTML = `<i class='bx bx-menu-alt-left' style='color:#ffffff'  ></i>`

      tog.classList.remove('enable')
   } else {
      document.getElementById('tgbtn').innerHTML = `<i class='bx bx-x-circle' style='color:#ffffff'  ></i>`

      tog.classList.add('enable')

   }





}

let sc = document.querySelector('.eventcon')

sc.addEventListener('wheel', (v) => {
   v.preventDefault()
   sc.scrollLeft += v.deltaY
})


document.getElementById('first').onclick = () => {
   window.location.href = "first.html";
}

let myconbtn = document.getElementById('secbtn')
let ectracontact = document.querySelector('.exterinfo')
document.getElementById('secbtn').onclick = () => {
   if (ectracontact.classList.contains('exterinfov')) {
      ectracontact.classList.remove('exterinfov')
      myconbtn.innerHTML = 'Contact'
   } else {
      ectracontact.classList.add('exterinfov')
      myconbtn.innerHTML = 'Cancel'
   }
}




document.getElementById('other').onclick = () => {
   alert(`We are Launching our New Website. We're working hard to modify our site!  Please come back soon.`)
}

