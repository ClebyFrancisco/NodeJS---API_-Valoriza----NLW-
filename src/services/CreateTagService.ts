import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagService {
    async execute(nome: string) {

        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!nome) {
            throw new Error("incorrect Name!");
        }
        const tagAlreadyExists = await tagsRepositories.findOne({
            nome,
        });
        if (tagAlreadyExists) {
            throw new Error("Tag Already Exists!")
        }
        const tag = tagsRepositories.create({
            nome
        });
        await tagsRepositories.save(tag);

        return tag

    }
}

export { CreateTagService }