import "server-only"

import prisma from "@/lib/db";
import verifyUser from "../../../data/verify-user";

export async function getProducts() {
    await verifyUser();
    const products = await prisma.product.findMany({});

    return products;
}

export async function getProductsForListing() {
    await verifyUser();
    const products = await prisma.product.findMany({
        select: {
            id: true,
            code: true,
            name: true,
            price: true,
            categoryId: true,
        },
    });

    return products;
}

export async function getProductById(id: number) {
    await verifyUser();
    const product = await prisma.product.findUnique({
        where: {
            id: id
        }
    });

    return product;
}
