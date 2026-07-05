import { AppError } from "./app-error";

export class AIProviderError extends AppError{
    constructor(message = "AI provider failed"){
        super(message, 502, "AI_PROVIDER_ERROR")
    }
}