import { useState, useContext, createContext } from "react";

const CustomizationCtx = createContext();

export const chairColors = [
  { color: "#683434", name: "brown" },
  { color: "#1a5e1a", name: "green" },
  { color: "#659994", name: "blue" },
  { color: "#896599", name: "mauve" },
  { color: "#ffa500", name: "orange" },
  { color: "#59555b", name: "grey" },
  { color: "#222222", name: "black" },
  { color: "#ececec", name: "white" },
];

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [chairColor, setChairColor] = useState(chairColors[0]);

  return (
    <CustomizationCtx.Provider
      value={{
        material,
        setMaterial,
        chairColor,
        setChairColor,
      }}
    >
      {props.children}
    </CustomizationCtx.Provider>
  );
};

export const useCustomization = () => {
  const ctx = useContext(CustomizationCtx);
  return ctx;
};
