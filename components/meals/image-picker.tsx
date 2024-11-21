"use client";

import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

type Props = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<any>(null);

  const inputRef = useRef() as any;

  const handlePickClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor="image">{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picker yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picker image" fill />}
        </div>
      </div>
      <div className={styles.controls}>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          name={name}
          id="image"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
