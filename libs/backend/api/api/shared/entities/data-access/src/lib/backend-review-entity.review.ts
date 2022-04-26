import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from './backend-user-entity.entity';
import { Product } from './backend-product-entity.entity';

@ObjectType()
export class Review {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  userId: string;

  @Field(() => Int)
  rating: number;

  @Field()
  comment: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Product)
  product: Product;
}
