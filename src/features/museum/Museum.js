import { DogCard } from './cards/DogCard';
import dogs from '../../assets/dogs';

/*
 *  This component is our main view!  Here, we'll show all the beautiful dogs
 *  in our museum (wow).  We'll do this by producing a collection of DogCard
 *  components from a list of dog pictures.
 * 
 *  This file's learning goals:
 *  - Working with a JSON object
 *  - Dynamically generating components
 *  - Assigning dynamically generated components a unique key
 *  - JS map
 *  - CSS styling
 *
 */

export const Museum = () => {

    const generateDogCards = () => {
        /* ----------------- CHALLENGE #1 BEGIN ---------------------- */
        
        /* 
         * Here is where we generate all the cards containing the stars
         * of the show! You'll notice that we imported an array of objects
         * at the top called dogs. Since this is an array, we can use the
         * JS map function to generate a DogCard for every dog in the list.
         * You'll want to look up the documentation for map, but here's a
         * basic illustration:
         * 
         * const mappedComponents = arrayOfThings.map((thing) => { 
         *   return <AComponent key={thing.id} /> 
         * })
         * 
         * arrayOfThings is your array of objects, thing is the current object
         * from that array being mapped. The map function takes a callback function
         * and passes you an individual item from the array as a parameter.
         * 
         * Map returns an array. Since we're returning a component from each
         * iteration of map, we can return that array from this function to have
         * it be rendered in the main container div. React can render lists/arrays
         * of components. If you're rendering elements through a map, you MUST
         * ensure that each item generated by the map function has a unique ID.
         * I've included an id property on each dog object in the dogs array,
         * so you'll want to have that id be the key. You can access it within
         * map by doing thing.id (or in your case, I'd rename thing to dog).
         * 
         * Once you're done mapping out all the components, return the list
         * of mapped components from this function.
         * 
         * Remember, DogCard takes in three props: key, name, and image. You can get
         * these from each object in the dogs array. You'll want to assign the
         * id property to key.
         * 
         */

        /* ----------------- CHALLENGE #1 END ------------------------ */
    }

    return(
        <div>
            {generateDogCards()}
        </div>
    );
}