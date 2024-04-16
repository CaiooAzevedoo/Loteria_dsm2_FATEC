import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Principal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Megasena />
          <Lotofacil />
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
