import React from 'react'
import MealsSummary from './MealsSummary'
import { MealsAvailable } from './MealsAvailable'

export const Meals = (props) => {
    return (
        <>
        <MealsSummary />
        <MealsAvailable />
        </>
    )
}
