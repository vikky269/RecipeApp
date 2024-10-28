import React, {useState} from 'react'
import { Soup, Heart, HeartPulse } from 'lucide-react'

const getTWoArrayValues = (arr) => {
    return [arr[0], arr[1] ]
}

const RecipeCard = ({recipe, bg, badge }) => {

const healthLabels = getTWoArrayValues(recipe.healthLabels)

const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));

	const addRecipeToFavorites = () => {
		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);

		if (isRecipeAlreadyInFavorites) {
			favorites = favorites.filter((fav) => fav.label !== recipe.label);
			setIsFavorite(false);
		} else {
			favorites.push(recipe);
			setIsFavorite(true);
		}

		localStorage.setItem("favorites", JSON.stringify(favorites));
	}


  return (
    <div className={`flex flex-col rounded-md  ${bg} overflow-hidden p-3 relative`}>
    <a 
      href={`https://www.youtube.com/results/?search_query=${recipe.label} recipe`}
      className='relative h-32'
      target='_blank'
      >
      

        <div className='skeleton inset-0 absolute'/>
        <img src={recipe.image} alt="" 
        className='w-full h-full object-cover rounded-md cursor-pointer opacity-0 transition-opacity duration-500'
        onLoad={(e)=> {
          e.currentTarget.style.opacity = 1
          e.currentTarget.previousElementSibling.style.display = "none"
        }}
        />

        <div className='absolute left-1 bottom-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm '>
          <Soup size={16} /> {recipe.yield} servings
        </div>

        <div 
         className='absolute bg-white top-1 right-2 rounded-full p-2 cursor-pointer'
         onClick={(e)=>{
           e.preventDefault()
           addRecipeToFavorites()
         } }
         >
          {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
          { isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
        </div>
    </a>
       <div className='flex mt-1'>
         <p className='font-bold tracking-wide'>{recipe.label}</p>
       </div>
        <p className='my-2'> {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen</p>
        
        <div className='flex gap-2  mt-auto'>
           {healthLabels.map((label, index)=> (
             <div key={index} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
             <HeartPulse size={16} />
             <span className='text-sm tracking-tighter font-semibold'>{label}</span>
            </div>
           ))}
        </div>
    </div>

  )
}

export default RecipeCard
