// builtin 

// external
import type { FastifyInstance } from "fastify";
import type { BaseReply, Poem, Process, ReplyConfig } from "./globals/types.js";
import { handleRecommendPoem, type PoemRecommendationInput } from "./handlers/handle-recommend-poems.js";

// internal


async function packageResponse<O>(
    handler: () => Promise<Process<O>>,
): Promise<ReplyConfig<O>> {
    const result = await handler();

    if (result.success) {
        return {
            reply: { ...result },
            code: 200
        };
    }

    if (result.code !== undefined) {
        return {
            reply: {
                success: false,
                error: result.error.name,
                message: result.error.message,
            },
            code: result.code
        };
    }

    throw result.error;
}

export function setupRoutes(server: FastifyInstance) {
    server.post<{
        Body: PoemRecommendationInput;
        Reply: BaseReply<Poem[]>;
    }>("/recommend", async (req, res) => {
        const { reply, code } = await packageResponse(() => handleRecommendPoem(req.body));
        res.status(code).send(reply);
    })
}