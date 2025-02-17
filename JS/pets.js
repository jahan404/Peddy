
// T A S K   1 : PETS CATEGORY BUTTON SET UP

//showing all pet CATEGORIES from api

const loadAllPetsCategoriesFromApi = async() =>{
   const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
   const data= await response.json()
   displayAllPetsCategoriesFromApi(data.categories)
}


//pet category button
const displayAllPetsCategoriesFromApi = (data) =>{
    const petCategoryButtonContainer = document.getElementById('all-pet-categories')
    


   data.forEach(onePet =>{
    const div = document.createElement('div')

    div.innerHTML=`
    
    <button id="btn-${onePet.category}" onclick="ActiveButton('btn-${onePet.category}')   ;   loadSpinner2('${onePet.category}') "    class="gap-4 border btn btn-wide btn-lg bg-transparent shadow-none all-pet-category-btn">
    
    <div class="h-10 w-10"> 
    <img class="h-full w-full" src="${onePet.category_icon}" />
    </div> 
    <span class="text-xl font-extrabold interFont">${onePet.category}</span> 
   
    </button>
    `
    petCategoryButtonContainer.appendChild(div)
   })
}



//active button features
async function ActiveButton(buttonName){
    // removing active button features from all buttons
    const allButton = document.getElementsByClassName('all-pet-category-btn')
    for(const oneButton of allButton){
        oneButton.classList.add('border')
        oneButton.classList.remove('bg-[rgb(14,122,129)]', 'bg-opacity-10' ,'rounded-full','border-[#0E7A811A]')
    }

    // adding active button features to clicked button
    document.getElementById(buttonName).classList.add('bg-[rgb(14,122,129)]', 'bg-opacity-10' ,'rounded-full','border-[#0E7A811A]')
    document.getElementById(buttonName).classList.remove('border')
}


loadAllPetsCategoriesFromApi()






//  T A S K   2 : ADD AND SHOW ALL PET CARDS TO pets-card-container 

const loadAllPetsFromApi = async() =>{

const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
const data = await response.json()
displayAndMakeCardOfAllPetsFromApi(data.pets)
}


function displayAndMakeCardOfAllPetsFromApi(allPetsArray){

const petsCardContainer = document.getElementById('pets-card-container')
petsCardContainer.innerHTML=``

if(allPetsArray.length===0){
document.getElementById('pets-card-container').classList.remove('grid')


const div = document.createElement('div')
div.innerHTML=
`
<div class="text-center flex justify-center items-center flex-col space-y-4">

<div class="text-center">
  <img class="mx-auto" src="images/error.webp" alt="">
</div>
<h1 class="text-2xl font-bold ">No Information Available</h1>
<p class="text-[#44424299] w-3/4 mx-auto">Oops! It looks like this pet is not available at the moment. 😔 Don't worry, we're constantly updating our data—please check back later or try searching again!</p>
</div>
`
petsCardContainer.appendChild(div)
petsCardContainer.classList.add('bg-[#13131308]','flex','justify-center','items-center','pb-[100px]')
}
else{
    document.getElementById('pets-card-container').classList.add('grid') 
    petsCardContainer.classList.remove('bg-[#13131308]','flex','justify-center','items-center','pb-[100px]')
}



// array looping 
allPetsArray.forEach((onePet)=>{

const div = document.createElement('div')
div.innerHTML=
`
<div class="card border">

  <figure class="p-3 h-[200px]">
    <img
      src="${onePet.image}"
      alt="Shoes"
      class="rounded-xl h-full w-full object-cover" />
  </figure>


  <div class="text-start pl-3 space-y-2">
  <h1 class="text-xl font-bold">${onePet.pet_name}</h1>

${
    (onePet.breed=== undefined || onePet.breed==="") ? `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400  mr-2"><i class="fa-solid fa-paw"></i></span>Breed : Not Available</p>` : `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400  mr-2"><i class="fa-solid fa-paw"></i></span>Breed : ${onePet.breed}</p>`
}
${
    (onePet.date_of_birth=== undefined || onePet.date_of_birth=== null || onePet.date_of_birth==="") ? `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400  mr-2"><i class="fa-solid fa-calendar-check"></i></span>Birth : Not Available</p>` : `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400  mr-2"><i class="fa-solid fa-calendar-check"></i></span>Birth : ${onePet.date_of_birth}</p>`
}

${
    (onePet.gender=== undefined|| onePet.gender==="") ? `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400 mr-2"><i class="fa-solid fa-venus"></i></span>Gender : Not Available</p>` : `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400 mr-2"><i class="fa-solid fa-venus"></i></span>Gender : ${onePet.gender}</p>`
}

${
    (onePet.price=== undefined || onePet.price=== null || onePet.price==="") ? ` <p class="text-base text-zinc-600 font-light"><span class="text-zinc-400 mr-2"><i class="fa-solid fa-dollar-sign"></i></span>Price : Not Available</p>`    :   `<p class="text-base text-zinc-600 font-light"><span class="text-zinc-400 mr-2"><i class="fa-solid fa-dollar-sign"></i></span> Price : ${onePet.price}$</p>`
}
</div>



<div class="border-b-[1px] mx-3 my-3"></div>



<div class="flex flex-row justify-between p-3">

 <div>
 <button class="btn btn-sm bg-transparent border-[#0E7A811A]">
  <span class=""><i class="fa-regular fa-thumbs-up"></i></span>
 </button>
 </div>

 <div>
 <button class="btn btn-sm bg-transparent border-[#0E7A811A]">
  <span class="text-[#0E7A81]">Adopt</span>
 </button>
 </div>

 <div>
 <button class="btn btn-sm bg-transparent border-[#0E7A811A]">
  <span class="text-[#0E7A81]">Details</span>
 </button>
 </div>

</div>


</div>

`
petsCardContainer.appendChild(div)
})
}








//  T A S K   3 : (SPINNER) LOAD AFTER 3 SECONDS
function loadSpinner(){
setTimeout(()=>{
document.getElementById('spinner').classList.add('hidden')
document.getElementById('petsCard').classList.remove('hidden')

loadAllPetsFromApi()
},2000)  
} 
loadSpinner()




function loadSpinner2(petCategoryName){
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('petsCard').classList.add('hidden')
    

    setTimeout(()=>{
        showCategoryWisePets(petCategoryName)
    },1000)

    setTimeout(()=>{
    
    document.getElementById('petsCard').classList.remove('hidden')
    document.getElementById('spinner').classList.add('hidden')
    },2000)  
    } 







//  T A S K   4 : PETS BUTTON ACTIVATION CATEGORY WISE

async function showCategoryWisePets(petName){

const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${petName}`)
const data = await response.json()

displayAndMakeCardOfAllPetsFromApi(data.data)
}