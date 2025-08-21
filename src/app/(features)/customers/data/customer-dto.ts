import "server-only"

import prisma from "@/lib/db";
import verifyUser from "../../../data/verify-user";

export async function getCustomers() {
    await verifyUser();
    const customers = await prisma.customer.findMany({});

    return customers;
}

export async function getCustomersForListing() {
    await verifyUser();
    const customers = await prisma.customer.findMany({
        select: {
            id: true,
            code: true,
            name: true,
            address: true,
        },
    });

    return customers;
}

export async function getCustomerById(id: string) {
    await verifyUser();
    const customer = await prisma.customer.findUnique({
        where: { id: Number(id) },
    });

    return customer;
}
