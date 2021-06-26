import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";


class ListTagController {
    async handle(request: Request, response: Response) {

        const listTagsServices = new ListTagService();

        const tags = await listTagsServices.execute();

        return response.json(tags)
    }
}


export { ListTagController }