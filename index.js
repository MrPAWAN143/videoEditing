


let screenH;
let scrollm;

window.addEventListener('scroll', () => {
  let bottom_fixed = document.querySelector('.bottom_fixed')
  screenH = screen.height
  console.log(screenH)

  scrollm = this.scrollY - screenH


  if ((scrollm > (-100))) {
    bottom_fixed.classList.remove('hidden')

  } else {
    bottom_fixed.classList.add('hidden')
  }

})


let body = document.querySelector('body')


let callback = document.querySelector('.callback')

callback.addEventListener('click', function () {
  container.style.opacity = '0.3'




  // body.classList.add('relative')

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="getfeedetails.php" method="POST" class="px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%]   md:h-auto md:m-auto absolute jsForm ">

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





let adbtn_1 = document.querySelector('.adbtn_1')
adbtn_1.addEventListener('click', function () {

  container.style.opacity = '0.3'

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="getfeedetails.php" method="POST" class="px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%]   md:h-auto md:m-auto absolute jsForm ">

    <div class='flex justify-between px-3 fs'>
    <p class="text-white  text-center ">Connect with counsellor</p> 
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
            class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-normal rounded-md">Submit</button>
    </div>


</form>`



  let cross = document.querySelector('.cross')
  let jsForm = document.querySelector('.jsForm')
  cross.addEventListener('click', function () {
    jsForm.style.display = 'none'
    container.style.opacity = '0'
  })



})


let registerNow = document.querySelector('.registerNow')

let container = document.querySelector('.container')
registerNow.addEventListener('click', function () {
    container.style.opacity = '0.3'


    // body.classList.add('relative')

    body.style.position = 'fixed'
    body.style.top = '0px'
    body.style.left = '50%'
    body.style.transform = 'translate(-50%)'

    body.innerHTML += ` <form action="getfeedetails.php" method="POST" class="  px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%] md:h-auto md:m-auto absolute  jsForm">

    <div class='flex justify-between px-3 fs'>
    <p class="text-white text-[22px] font-bold   text-center">Download Free Brochure</p> 
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
            class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-normal rounded-md">Download now</button>
    </div>


</form>`



    let cross = document.querySelector('.cross')
    let jsForm = document.querySelector('.jsForm')
    cross.addEventListener('click', function () {
      jsForm.style.display = 'none'
      container.style.opacity = '0'
    })



  })




let getfeedetail = document.querySelector('.getfeedetail')


getfeedetail.addEventListener('click', function () {
    container.style.opacity = '0.3'


    // body.classList.add('relative')

    body.style.position = 'fixed'
    body.style.top = '0px'
    body.style.left = '50%'
    body.style.transform = 'translate(-50%)'

    body.innerHTML += ` <form action="getfeedetails.php" method="POST" class="  px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%] md:h-auto md:m-auto absolute  jsForm">

    <div class='flex justify-between px-3 fs'>
    <p class="text-white text-[22px] font-noraml   text-center">Get fee Detail</p> 
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
            class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-normal rounded-md">Download now</button>
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


  // body.classList.add('relative')

  body.style.position = 'fixed'
  body.style.top = '0px'
  body.style.left = '50%'
  body.style.transform = 'translate(-50%)'

  body.innerHTML += ` <form action="getfeedetails.php" method="POST" class="  px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%] md:h-auto md:m-auto absolute  jsForm">

  <div class='flex justify-between px-3 fs'>
  <p class="text-white font-bold   text-center">Enroll now</p> 
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
          class="block bg-[#25D0AD] m-auto py-2 w-[100%] text-[19px] font-light rounded-md">Enroll</button>
  </div>


</form>`



  let cross = document.querySelector('.cross')
  let jsForm = document.querySelector('.jsForm')
  cross.addEventListener('click', function () {
    jsForm.style.display = 'none'
    container.style.opacity = '0'
  })

})







let applynowbtn = document.querySelectorAll('.applynow')
for (i = 0; i <= applynowbtn.length; i++) {

  applynowbtn[i].addEventListener('click', function (e) {
    container.style.opacity = '0.3'



    body.style.position = 'fixed'
    body.style.top = '0px'
    body.style.left = '50%'
    body.style.transform = 'translate(-50%)'

    body.innerHTML += ` <form action="getfeedetails.php" method="POST" class="px-3 py-4 md:pt-8 md:pb-12 md:w-[400px] w-[100%]  md:h-auto md:m-auto absolute jsForm">
    
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
}






















