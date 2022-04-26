import { Injectable } from '@nestjs/common';
import { PrismaService } from '@example/backend/shared/services/prisma/data-access';
import { User, Product } from '@prisma/client';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async createProduct(product: Product): Promise<Product> {
    return this.prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        brand: product.brand,
        category: product.category,
        countInStock: product.countInStock,
        rating: product.rating,
        numReviews: product.numReviews,
      },
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getProductById(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async updateProduct(product: Product): Promise<Product> {
    return this.prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        brand: product.brand,
        category: product.category,
        countInStock: product.countInStock,
        rating: product.rating,
        numReviews: product.numReviews,
      },
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
