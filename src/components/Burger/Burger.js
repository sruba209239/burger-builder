import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css';

const burger = (props) => (
    <div className={classes.Burger}>
        <BurgerIngredients type="bread-top"/>
        <BurgerIngredients type="chicken"/>
        <BurgerIngredients type="cheese"/>
        <BurgerIngredients type="patty"/>
        <BurgerIngredients type="bread-bottom"/>
    </div>
);

export default burger;