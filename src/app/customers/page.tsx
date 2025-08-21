import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getCustomers } from "../data/customer-dto";


export default async function CustomersPage() {
    const customers = await getCustomers();

    return (
        <div className="flex justify-center items-center max-w-1/2 mx-auto mt-4 border p-4 rounded-lg shadow-md">
            <Table>
                <TableCaption >Customer Listing</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-10">ID</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Address</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((customer) => (
                    <TableRow key={customer.id}>
                        <TableCell className="font-medium">{customer.id}</TableCell>
                        <TableCell>{customer.code}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.address}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total Customers:</TableCell>
                    <TableCell className="text-right">{customers.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
        );
}
