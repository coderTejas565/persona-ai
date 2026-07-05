import { generateResponse } from "@/lib/ai/chat";
import { chatRequestSchema } from "@/lib/validations/chat";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { messages } = chatRequestSchema.parse(body);

    const result = await generateResponse({
      messages,
    });

    return Response.json({
      text: result.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}