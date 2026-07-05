import { generateResponse } from "@/lib/ai/chat";
import { AppError, ValidationError } from "@/lib/errors";
import { chatRequestSchema } from "@/lib/validations/chat";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = chatRequestSchema.safeParse(body);

    if (!validationResult.success) {
      throw new ValidationError(validationResult.error.message);
    }

    const { messages } = validationResult.data;

    const response = await generateResponse({
      messages,
    });

    return Response.json(response);
  } catch (error) {
    if (error instanceof AppError) {
      return Response.json(
        {
          error: error.message,
          code: error.code,
        },
        {
          status: error.statusCode,
        }
      );
    }

    console.error(error);

    return Response.json(
      {
        error: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      },
      {
        status: 500,
      }
    );
  }
}