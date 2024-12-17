import React from "react";

function card({ text, img, alt }) {
  return (
    <div>
      <h1 class="heading">{text}</h1>
      {img ? (
        <img
          class="image"
          src={`${process.env.PUBLIC_URL}/img/rtw.jpg`}
          alt={alt}
        />
      ) : (
        <div>img not loaded</div>
      )}
    </div>
  );
}

export default card;
