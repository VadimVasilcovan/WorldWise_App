import styles from "./CountryList.module.css";
import React from "react";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message={"Add your first city by clicking on city on the map"} />
    );
  return (
    <ul className={styles.CountryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
