import { ILoteria } from "../types";
import api from "./fetch";

class Loteria {
    async get(): Promise<ILoteria> {
        const {data} = await api.get("/");
        return data;
    }
}

const loteria = new Loteria();
export default loteria;
