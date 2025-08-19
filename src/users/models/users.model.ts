import { Entity, PrimaryColumn, Column, BeforeInsert } from 'typeorm';
import { randomBytes } from 'crypto';

@Entity()
export class Users {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 255 })
  password: string;

 
}
