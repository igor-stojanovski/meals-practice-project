"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

const isInvalidText = (text: any) => {
  return !text || text.trim() === "";
};

export const handleShareMealSubmit = async (prevState: any, formData: any) => {
  console.log(prevState);

  

  const meal: any = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return "Invalid input";
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
