import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Racun {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    userName: string;

    @Column()
    purchaseDate: Date;
}
