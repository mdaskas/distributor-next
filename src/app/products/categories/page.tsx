import { getProductCategories } from "@/app/actions/actions";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function ProductsPage() {
    const productCategories = await getProductCategories();
    console.log(productCategories);
    return (
       <div className="flex justify-center items-center max-w-1/4 mx-auto mt-4 border p-4 rounded-lg shadow-md">
            <Table>
                <TableCaption >Product Category Listing</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-10">ID</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productCategories.map((category) => (
                    <TableRow key={category.id}>
                        <TableCell className="font-medium">{category.id}</TableCell>
                        <TableCell className="font-medium">{category.code}</TableCell>
                        <TableCell>{category.name}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total Categories: </TableCell>
                        <TableCell className="text-right">{productCategories.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
