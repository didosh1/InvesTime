import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Client {
    @Column()
    fio: string

    @PrimaryColumn()
    email: string

    @Column()
    password: string

    @Column()
    balance: Number
}