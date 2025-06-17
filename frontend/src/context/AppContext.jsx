import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { doctors as localDoctors } from "../assets/assets"; // локалните доктори од assets.js

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState([]);
  const currencySymbol = "$";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors") // backend URL
      .then((res) => {
        if (res.data.length > 0) {
          setDoctors(res.data); // ако има доктори од MongoDB → користи ги
        } else {
          setDoctors(localDoctors); // ако нема доктори → користи ги локалните
        }
      })
      .catch((err) => {
        console.error("Грешка при повлекување доктори:", err);
        setDoctors(localDoctors); // ако има грешка → користи ги локалните
      });
  }, []);

  const value = {
    doctors,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;