"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export const DataFetch = () => {
  const [userData, setUserData] = useState({ gender: null });

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setUserData(res.data.results[0]);
    });
  }, []);

  return <div>{userData.gender}</div>;
};
