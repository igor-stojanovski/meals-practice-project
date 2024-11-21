"use client";

import React, { useActionState } from "react";
import ImagePicker from "./image-picker";
import styles from "./meals-form-submit.module.css";
import { handleShareMealSubmit } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  const [state, formAction] = useActionState(handleShareMealSubmit, "");
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={10}
          required
        ></textarea>
      </p>
      <ImagePicker label="Your Image" name="image" />
      {state && <p>{state}</p>}
      <p className={styles.actions}>
        {
          <button type="submit" disabled={pending}>
            {pending ? "Submitting" : "Share Meal"}
          </button>
        }
      </p>
    </form>
  );
}
