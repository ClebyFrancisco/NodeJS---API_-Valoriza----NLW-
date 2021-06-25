import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tags";
import { User } from "./User";

@Entity("compliments")
class Compliment {
    @PrimaryColumn()
    readonly id: String;

    @Column()
    user_send: String;
    @JoinColumn({ name: "user_send" })
    @ManyToOne(() => User)
    userSend: User;


    @Column()
    user_receiver: String;
    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;


    @Column()
    tag_id: String;
    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: String;

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment }


