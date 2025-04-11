import styles from "./CountryList.module.css";
import React from "react";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CityContexts";

export default function CountryList() {
  const { cities, isLoading }= useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message={"Add your first city by clicking on city on the map"} />
    );

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
          arr.push({ country: city.country, emoji: city.emoji, id: city.id });
        }
        return arr;
      }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
