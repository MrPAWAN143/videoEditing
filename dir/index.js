let registerNow = document.querySelector('.registerNow')

let container = document.querySelector('.container')

registerNow.addEventListener('click', function () {
  container.style.opacity = '0.3'
  let body = document.querySelector('body')

  // body.classList.add('relative')

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="" class="  px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] md:h-auto md:m-auto absolute  jsForm">

    <div class='flex justify-between px-3 fs'>
    <p class="text-white   text-center">Download Free Browcher</p> 
    <a href='' class="text-white text-[22px] text-center cross">X</a> 
    </div>

    <div class="flex items-center justify-center  w-[100%] mt-6">
        <!-- <label for="name" class="text-white font-normal ">Name:</label> -->
        <input type="text" name="name"
            class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="name"
            placeholder="Name">


    </div>

    <div class="flex items-center justify-center  w-[100%] mt-6">
        <!-- <label for="eamil" class="text-white font-normal ">Email:</label> -->
        <input type="email" name="email"
            class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="email"
            placeholder="Email">


    </div>

    <div class="flex items-center justify-center  w-[100%] mt-6">
        <!-- <label for="phone" class="text-white font-normal ">Email:</label> -->
        <input type="tel" name="phone"
            class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="phone"
            placeholder="Phone">


    </div>
    <div class=" w-[100%] mt-8 px-2 m-auto">
        <button
            class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-light rounded-md">Download now</button>
    </div>


</form>`



  let cross = document.querySelector('.cross')
  let jsForm = document.querySelector('.jsForm')
  cross.addEventListener('click', function () {
    jsForm.style.display = 'none'
    container.style.opacity = '0'
  })



})


let enrollNow = document.querySelector('.enrollNow')
enrollNow.addEventListener('click', function () {
  container.style.opacity = '0.3'
  let body = document.querySelector('body')

  // body.classList.add('relative')

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="" class="  px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] md:h-auto md:m-auto absolute  jsForm">

  <div class='flex justify-between px-3 fs'>
  <p class="text-white   text-center">Download Free Browcher</p> 
  <a href='' class="text-white text-[22px] text-center cross">X</a> 
  </div>

  <div class="flex items-center justify-center  w-[100%] mt-6">
      <!-- <label for="name" class="text-white font-normal ">Name:</label> -->
      <input type="text" name="name"
          class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="name"
          placeholder="Name">


  </div>

  <div class="flex items-center justify-center  w-[100%] mt-6">
      <!-- <label for="eamil" class="text-white font-normal ">Email:</label> -->
      <input type="email" name="email"
          class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="email"
          placeholder="Email">


  </div>

  <div class="flex items-center justify-center  w-[100%] mt-6">
      <!-- <label for="phone" class="text-white font-normal ">Email:</label> -->
      <input type="tel" name="phone"
          class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="phone"
          placeholder="Phone">


  </div>
  <div class=" w-[100%] mt-8 px-2 m-auto">
      <button
          class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-light rounded-md">Download now</button>
  </div>


</form>`



  let cross = document.querySelector('.cross')
  let jsForm = document.querySelector('.jsForm')
  cross.addEventListener('click', function () {
    jsForm.style.display = 'none'
    container.style.opacity = '0'
  })

})






let applynowbtn = document.querySelector('.applynow')

// let x = window.innerWidth
// console.log(x)

// if (x >= 430) {
applynowbtn.addEventListener('click', function (e) {
  container.style.opacity = '0.3'
  let body = document.querySelector('body')

  // body.classList.add('relative')

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="" class="px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%]  md:h-auto md:m-auto absolute jsForm">
    
        <div class='flex justify-between px-3 fs'>
        <p class="text-white  text-center">Apply now</p> 
        <a href='' class="text-white text-[22px] text-center cross">X</a> 
        </div>
    
        <div class="flex items-center justify-center  w-[100%] mt-6">
            <!-- <label for="name" class="text-white font-normal ">Name:</label> -->
            <input type="text" name="name"
                class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="name"
                placeholder="Name">
    
    
        </div>
    
        <div class="flex items-center justify-center  w-[100%] mt-6">
            <!-- <label for="eamil" class="text-white font-normal ">Email:</label> -->
            <input type="email" name="email"
                class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="email"
                placeholder="Email">
    
    
        </div>
    
        <div class="flex items-center justify-center  w-[100%] mt-6">
            <!-- <label for="phone" class="text-white font-normal ">Email:</label> -->
            <input type="tel" name="phone"
                class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="phone"
                placeholder="Phone">
    
    
        </div>
        <div class=" w-[100%] mt-8 px-2 m-auto">
            <button
                class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-light rounded-md">Apply now</button>
        </div>
    
    
    </form>`



  let cross = document.querySelector('.cross')
  let jsForm = document.querySelector('.jsForm')
  cross.addEventListener('click', function () {
    jsForm.style.display = 'none'
    container.style.opacity = '0'
  })



})




let callblack = document.querySelector('.callblack')

callblack.addEventListener('click', function () {
  container.style.opacity = '0.3'


  let body = document.querySelector('body')

  // body.classList.add('relative')

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="" class="px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%]   md:h-auto md:m-auto absolute jsForm ">

    <div class='flex justify-between px-3 fs'>
    <p class="text-white  text-center">Start a conversation</p> 
    <a href='' class="text-white text-[22px] text-center cross">X</a> 
    </div>

    <div class="flex items-center justify-center  w-[100%] mt-6">
        <!-- <label for="name" class="text-white font-normal ">Name:</label> -->
        <input type="text" name="name"
            class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="name"
            placeholder="Name">


    </div>

    <div class="flex items-center justify-center  w-[100%] mt-6">
        <!-- <label for="eamil" class="text-white font-normal ">Email:</label> -->
        <input type="email" name="email"
            class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="email"
            placeholder="Email">


    </div>

    <div class="flex items-center justify-center  w-[100%] mt-6">
        <!-- <label for="phone" class="text-white font-normal ">Email:</label> -->
        <input type="tel" name="phone"
            class="text-black pl-2 py-2  w-[100%] ml-2 rounded-md inputss" id="phone"
            placeholder="Phone">


    </div>
    <div class=" w-[100%] mt-8 px-2 m-auto">
        <button
            class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-light rounded-md">Submit message</button>
    </div>


</form>`



  let cross = document.querySelector('.cross')
  let jsForm = document.querySelector('.jsForm')
  cross.addEventListener('click', function () {
    jsForm.style.display = 'none'
    container.style.opacity = '0'
  })



})



// let getfeeDetails = document.querySelector('.getfeeDetails')
// getfeeDetails.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let getname = document.querySelector('.getname').value
//     let getemail = document.querySelector('.getemail').value
//     let getphone = document.querySelector('.getphone').value




//     console.log(getname, getemail, getphone)
// })

// $('.getfeeDetails').click(function (e) {
//   e.preventDefault()
//   $.ajax({
//     url: 'getfeedetails.php',
//     method: 'post',
//     data: {},
//     success: function (result) {

//       console.log(result)

//       try {
//         result = JSON.parse(result)
//         console.log(result.name)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   })
// })

// Initialization for ES Users

function RightArrow1() {
  let item = document.querySelectorAll('.videoitem')
  let itemActive = document.querySelectorAll('.dot')
  let activedot = 0
  let activeIndex = 0

  for (let i = 0; i < itemActive.length; i++) {
    if (itemActive[i].classList.contains('active')) {
      activedot = i
    }
    itemActive[i].classList.remove('active')
  }

  if (activedot == itemActive.length - 1) {
    activedot = 0
    itemActive[activedot].classList.add('active')
  } else {
    itemActive[activedot + 1].classList.add('active')
  }


  for (let i = 0; i < item.length; i++) {
    if (item[i].classList.contains('active')) {
      activeIndex = i
    }
    item[i].classList.remove('active')

  }

  if (activeIndex == item.length - 1) {
    activeIndex = 0


    item[activeIndex].classList.add('active')

  } else {
    item[activeIndex + 1].classList.add('active')
  }


}


function LeftArrow1() {
  let item = document.querySelectorAll('.videoitem')

  let activeIndex = 0


  for (let i = 0; i < itemActive.length; i++) {
    if (itemActive[i].classList.contains('active')) {
      activedot = i
    }
    itemActive[i].classList.remove('active')
  }

  if (activedot == 0) {
    activedot = itemActive.length - 1
    itemActive[activedot].classList.add('active')
  } else {
    itemActive[activedot - 1].classList.add('active')
  }

  for (let i = 0; i < item.length; i++) {
    if (item[i].classList.contains('active')) {
      activeIndex = i
    }
    item[i].classList.remove('active')

  }

  if (activeIndex == 0) {
    activeIndex = item.length - 1

    item[activeIndex].classList.add('active')

  } else {
    item[activeIndex - 1].classList.add('active')
  }

}



// let collapse = document.querySelector('.collapse1')

// collapse.addEventListener('click',function(){
//     collapse.style.height = '300px'
//     console.log('hello')
// })







// advisor content

// let body = document.querySelector('body')

// body.addEventListener('scroll',function(e){
//   // e.bottom_fixed.classList.remove('hidden')
//   console.log(e)

//   console.log('hellow')
// })

window.addEventListener('scroll',()=>{
let bottom_fixed = document.querySelector('.bottom_fixed')
bottom_fixed.classList.remove('hidden')
  
})