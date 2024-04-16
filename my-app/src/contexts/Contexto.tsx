import { createContext, useEffect, useState } from "react";
import { ILoteria, Props } from "../types";
import loteria from "../Api/Loteria";


export const Contexto = createContext({} as ILoteria);

export function Provider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [lotofacil, setLotofacil] = useState({} as Props);

  useEffect(() => {
    (async function () {
      const r = await loteria.get();
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
      console.log( r );
    })();
  }, []);

  return (
    <Contexto.Provider value={{ megasena, lotofacil }}>
        {children}
    </Contexto.Provider>
  );
}
