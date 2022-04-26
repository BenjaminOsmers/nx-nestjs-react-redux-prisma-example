import { ObjectType, Int, ID, Field } from '@nestjs/graphql';
import { User } from './backend-user-entity.entity';
import { OrderItem } from './backend-orderitem-entity.entity';

@ObjectType()
export class Order {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field(() => [OrderItem])
  items: OrderItem[];

  @Field(() => Int)
  quantity: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  postalCode: string;

  @Field()
  country: string;

  @Field(() => Boolean)
  isDelivered: boolean;

  @Field(() => Boolean)
  isPaid: boolean;

  @Field(() => Date)
  deliveredAt?: Date;

  @Field(() => Date)
  paidAt?: Date;

  @Field(() => User)
  user: User;
}
