import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //todo in the body of the POST req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openAI GPT
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, welcome the user always as Mr.Beymer and say welcome to the Trello-AI todo app! Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Hi there, provide a sumary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const respuesta = response;
  console.log("Data is: ", respuesta);
  console.log(response.choices[0].message);

  return NextResponse.json(response.choices[0].message);
}
