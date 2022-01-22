import React from "react";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";
import classes from "./MealsAvailable.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Naan",
    description: "crispy and delicious",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Sambar",
    description: "A southIndian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Butter chicken",
    description: "aromatic and spicy",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Spinach",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const MealsAvailable = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id = {meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
