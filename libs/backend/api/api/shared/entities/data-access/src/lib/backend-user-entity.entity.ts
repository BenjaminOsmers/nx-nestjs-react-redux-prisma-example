import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Product } from './backend-product-entity.entity';
import { Order } from './backend-order-entity.entity';
import { Review } from './backend-review-entity.review';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Boolean)
  isAdmin: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [Product])
  products: Product[];

  @Field(() => [Review])
  reviews: Review[];

  @Field(() => [Order])
  orders: Order[];
}
