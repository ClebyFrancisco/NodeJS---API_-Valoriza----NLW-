import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    nome: string;
    email: string;
    admin?: boolean;

}


class CreateUserService {

    async execute({ nome, email, admin }: IUserRequest) {
        const usersRepository= getCustomRepository(UsersRepositories);
        if (!email) {
            throw new Error("Email incorrect!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
        if (userAlreadyExists) {
            throw new Error("User Already Exists!");

        }

        const user = usersRepository.create({
            nome,
            email,
            admin
        });
        await usersRepository.save(user);

        return user;

    }

}
export { CreateUserService };