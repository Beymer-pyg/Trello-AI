import { resolve } from "path";
import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  //delay 2 seg
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);

  const todos = formatTodosForAI(board);
  console.log("FORMATTED todos to send >> ", todos);

  // const res = await fetch("/api/generateSummary", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ todos }),
  // })

  // const GPTdata = await res.json();
  // console.log(GPTdata);
  // const { content } = GPTdata;
  // return content;
  return "Hola Sr. esta todo listo, pero la API se quedo sin fondos";
};

export default fetchSuggestion;
