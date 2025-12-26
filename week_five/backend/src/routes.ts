// builtin 

// external
import type { FastifyInstance } from "fastify";

// internal


export function setupRoutes(server: FastifyInstance) {

    /* TODO:
     * Add typing to this route and finish up the actual route logic
     * for these two routes here
     * (don't change the GET and POST designations please,
     *  but you can change the endpoint if you'd like)
     */
    server.get<{

    }>("/loans", async (req, res) => {

    });

    server.post<{

    }>("/borrowed", async (req, res) => {

    })
}