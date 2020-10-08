/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";

const CoffeeDiv = styled.div`
  width: 400px;
  background: green;
  color: white;
  padding: 2%;
  position: fixed;
  margin: 2% 15% 15% 30%;
  border-radius: 10px;
  overflow: hidden;
`;

const CoffeeForm = () => {
  // setting State
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    type: {
      regular: false,
      latte: false,
      americano: false,
      cappuccino: false,
      flatWhite: false,
      espresso: false,
    },
    temp: {
      hot: false,
      iced: false,
    },
    milk: {
      regular: false,
      soy: false,
      oat: false,
      almond: false,
      nonFat: false,
      skim: false,
    },
  });

  // handle changes in each input area
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <CoffeeForm>
      <form>
        <h3>Coffee Form</h3>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            placeholder="Enter Name..."
            onChange={handleChange}
            data-cy="name"
          />
        </label>{" "}
        Phone Number:
        <label htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            placeholder="Enter Phone #..."
            onChange={handleChange}
            data-cy="phone"
          />
        </label>
        <label htmlFor="type">
          Type of Coffee:
          <select id="type" name="type" data-cy="type" onChange={handleChange}>
            <option>--Choose One--</option>
            <option value="regular" data-cy="regular">
              Regular
            </option>
            <option value="latte" data-cy="latte">
              Latte
            </option>
            <option value="americano" data-cy="americano">
              Americano
            </option>
            <option value="cappuccino" data-cy="cappuccino">
              Cappuccino
            </option>
            <option value="flatWhite" data-cy="flatWhite">
              Flat White
            </option>
            <option value="espresso" data-cy="espresso">
              Espresso
            </option>
          </select>
        </label>
        <label htmlFor="temp">
          Temperature:
          <select
            id="temp"
            name="temp"
            data-cy="temp"
            defaultValue="Hot"
            onChange={handleChange}
          >
            <option data-cy="hot" value="hot">
              Hot
            </option>
            <option data-cy="iced" value="iced">
              Iced
            </option>
          </select>
        </label>
        <label htmlFor="milk">
          Milk Option:
          <select
            id="milk"
            name="milk"
            data-cy="milk"
            defaultValue="Regular"
            onChange={handleChange}
          >
            <option data-cy="regular" value="regular">
              Regular
            </option>
            <option data-cy="soy" value="soy">
              Soy
            </option>
            <option data-cy="oat" value="oat">
              Oat
            </option>
            <option data-cy="almond" value="almond">
              Almond
            </option>
            <option data-cy="nonFat" value="nonFat">
              Non-Fat
            </option>
            <option data-cy="skim" value="skim">
              Skim
            </option>
          </select>
        </label>
        <label>
          Additions
          <label htmlFor="checked">
            <input
              type="checkbox"
              name="noFoam"
              data-cy="noFoam"
              id="checked"
              value="noFoam"
              onChange={handleChange}
            />
            No Foam
          </label>
          <label htmlFor="checked">
            <input
              type="checkbox"
              name="cinnamon"
              data-cy="cinnamon"
              id="checked"
              value="cinnamon"
              onChange={handleChange}
            />
            Cinnamon
          </label>
          <label htmlFor="checked">
            <input
              type="checkbox"
              name="whippedCream"
              data-cy="whippedCream"
              id="checked"
              value="whippedCream"
              onChange={handleChange}
            />
            Whipped Cream
          </label>
          <label htmlFor="checked">
            <input
              type="checkbox"
              name="caramelDrizzle"
              data-cy="caramelDrizzle"
              id="checked"
              value="caramelDrizzle"
              onChange={handleChange}
            />
            Caramel Drizzle
          </label>
        </label>
        <label htmlFor="">
          <textarea />
        </label>
        <button type="submit">Order Now</button>
      </form>
    </CoffeeForm>
  );
};

export default CoffeeForm;
