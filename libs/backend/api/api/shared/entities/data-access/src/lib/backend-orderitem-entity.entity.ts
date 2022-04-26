import { ObjectType, Int, ID, Field } from '@nestjs/graphql';
import { Product } from './backend-product-entity.entity';
import { Order } from './backend-order-entity.entity';

@ObjectType()
export class OrderItem {
  @Field(() => ID)
  orderId: string;

  @Field(() => ID)
  productId: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Product)
  product: Product;

  @Field(() => Order)
  order: Order;
}
