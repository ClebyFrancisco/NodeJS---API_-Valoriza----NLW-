import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash }from "bcryptjs";

interface IUserRequest {
    nome: string;
    email: string;
    admin?: boolean;
    password: string;

}
class CreateUserService {

    async execute({ nome, email, admin = false, password }: IUserRequest) {
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
        const passwordHash = await hash(password, 8);
        
        const user = usersRepository.create({
            nome,
            email,
            admin,
            password: passwordHash,
        });
        await usersRepository.save(user);

        return user;

    }

}
export { CreateUserService };