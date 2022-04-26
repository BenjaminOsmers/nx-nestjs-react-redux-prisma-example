import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { User } from './backend-user-entity.entity';
import { Order } from './backend-order-entity.entity';
import { Review } from './backend-review-entity.review';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  brand: string;

  @Field()
  category: string;

  @Field()
  description: string;

  @Field(() => Int)
  rating: number;

  @Field(() => Int)
  numReviews: number;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  countInStock: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => [Review])
  reviews: Review[];

  @Field(() => [Order])
  orders: Order[];
}
