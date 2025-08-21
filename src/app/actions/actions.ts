"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
    const post = await prisma.product.create({
        data: {
            id: Number(formData.get("id") ?? 0),
            code: formData.get("code") as string,
            name: formData.get("name") as string,
            price: Number(formData.get("price") ?? 0),
            categoryId: Number(formData.get("categoryId") ?? 0),
        }
    });
    revalidatePath("/products");

    return post;
}


export async function getProductCategories() {
    const productCategories = await prisma.productCategory.findMany({});
    
    return productCategories;
}

export async function getProductCategoryById(id: number) {
    const productCategory = await prisma.productCategory.findUnique({
        where: {
            id: id
        }
    });

    return productCategory;
}

export async function createProductCategory(formData: FormData) {
    const post = await prisma.productCategory.create({
        data: {
            id: Number(formData.get("id") ?? 0),
            code: formData.get("code") as string,
            name: formData.get("name") as string,
        }
    });
    revalidatePath("/products/categories");

    return post;
}
