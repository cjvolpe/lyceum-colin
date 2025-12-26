// environment
import "./bootstrap.js";

// builtin

// external
import Fastify, { type FastifyInstance } from 'fastify'
import { setupRoutes } from "./routes.js";

// internal


const fastify: FastifyInstance = Fastify({
    logger: true
})

setupRoutes(fastify);

fastify.get('/', async (_request, _reply) => {
    return { hello: 'world' }
})

const start = async () => {
    try {
        await fastify.listen({ port: 8000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()