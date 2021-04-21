import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("settings")
class Settings {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    //gerar o id pela biblioteca uuid quando o id for vazio
    constructor(){
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Settings };