import { Request, Response } from'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUsercontoller{

    async handle(request:Request, response:Response){
        const { nome, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({nome, email, admin, password});

        return response.json(user);
    };

};

export { CreateUsercontoller };