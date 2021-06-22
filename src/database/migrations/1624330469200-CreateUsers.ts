import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624330469200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns: [
                    {
                        name:"Id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"nome",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"admin",
                        type:"boolean",
                        default: false
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default: "now()"
                    }

                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
