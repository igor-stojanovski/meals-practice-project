import React from "react";
import styles from "./meals-grid.module.css";
import MealItem from "./meal-item";

type Props = {
  meals: any[];
};

export default function MealsGrid({ meals }: Props) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
