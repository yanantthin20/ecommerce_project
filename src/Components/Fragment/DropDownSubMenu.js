import React from "react";

const DropDownSubMenu = () => {
  return (
    <div id="leftMenu">
      <details>
        <summary>Vitamin Supplement & Sleep Aids</summary>
        <a href="#">Men Supplement</a>
        <a href="#">Women Supplement</a>
        <a href="#">Kid & Teen Supplement</a>
        <a href="#">Sleep Aids</a>
      </details>
      <details>
        <summary>Menu Item 2</summary>
        <a href="#">Subcategory A</a>
        <a href="#">Subcategory B</a>
      </details>
      <details>
        <summary>Menu Item 3</summary>
        <a href="#">Subcategory A</a>
        <a href="#">Subcategory B</a>
        <a href="#">Subcategory C</a>
        <a href="#">Subcategory D</a>
        <a href="#">Subcategory E</a>
      </details>
      <details>
        <summary>Menu Item 4</summary>
        <a href="#">Subcategory A</a>
        <a href="#">Subcategory B</a>
        <a href="#">Subcategory C</a>
      </details>
    </div>
  );
};

export default DropDownSubMenu;
