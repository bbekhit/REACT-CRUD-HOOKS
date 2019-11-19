import React from "react";
import CrudLists from "./CrudLists";
import CrudForm from "./CrudForm";
import CrudAdd from "./CrudAdd";

export const Home = () => {
  return (
    <div>
      <CrudAdd />
      <CrudLists />
    </div>
  );
};
