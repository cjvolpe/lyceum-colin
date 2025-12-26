// builtin 

// external
import type { FastifyInstance } from "fastify";

// internal
import { handleGetCurrentLoans, type GetCurrentLoansInput } from "./handlers/get-loans-handler.js";
import { handleGetAllBorrowed, type GetAllBorrowedInput } from "./handlers/get-borrowed-handler.js";
import type { Book, User } from "./globals/types.js";


export function setupRoutes(server: FastifyInstance) {
    server.get<{
        Querystring: GetCurrentLoansInput;
        Reply: Book[];
    }>("/loans", async (req, res) => {
        const reply = await handleGetCurrentLoans(req.query);
        res.status(200).send(reply);
    });

    server.post<{
        Body: GetAllBorrowedInput;
        Reply: User[];
    }>("/borrowed", async (req, res) => {
        const reply = await handleGetAllBorrowed(req.body);
        res.status(200).send(reply);
    })
}