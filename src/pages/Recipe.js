import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { getMealById } from './Api'
import Loader from '../components/Loader';

function Recipe() {
    const [recipe, setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)
    const { id } = useParams();
    const { goBack } = useHistory()

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [])

    const handleShowRecipe = () => {
        setShowRecipe(!showRecipe)
    }

    return (
        <div>
            <button className='btn' onClick={goBack}>Go Back</button>
            {!recipe.length ? (
                <div className='recipe'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipeImg" />
                        </div>
                        <div className='col-8'>
                            <h4> {recipe.strMeal}</h4>
                            <h6><b>Category:</b> <i>{recipe.strCategory}</i></h6>
                            {recipe.strArea ? <h6><b>Area:</b> {recipe.strArea}</h6> : null}
                            <p><b>Instructions: </b>{recipe.strInstructions}</p>
                            <button onClick={handleShowRecipe} className='btn'>Show Recipe</button>
                            {showRecipe ? (
                                <table className='centred'>
                                <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(recipe).map(key => {
                                        if(key.includes('Ingredient') && recipe[key]) {
                                            return(
                                                <tr>
                                                    <td>{recipe[key]}</td>
                                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                            ) : null}
                            
                            {recipe.strYoutube ? (
                                <div className='recipe'>
                                    <h5>Vidoe Recipe</h5>
                                    <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id} />
                                </div>
                            ) : null}

                        </div>
                    </div>
                </div>
            ) : <Loader />}
        </div>
    );
}

export default Recipe;