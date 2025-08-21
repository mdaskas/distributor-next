import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getProductsForListing } from "../data/product-dto";
import ProductForm from "./product-form";


export default async function ProductsPage() {
    const products = await getProductsForListing();
    

    return (
        <div className="flex flex-col justify-center items-center max-w-1/2 mx-auto mt-4 border p-4 rounded-lg shadow-md">
            <div className='border border-gran-400 p-4 mb-4'><ProductForm /></div>
            <Table className="border border-gray-400 p-4">
                <TableCaption >Product Listing</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-10">ID</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead>Detail</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.id}</TableCell>
                        <TableCell>{product.code}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.categoryId}</TableCell>
                        <TableCell className="text-right">{product.price}</TableCell>
                        <TableCell><a href={`/products/${product.id}`}>View Details</a></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total Products:</TableCell>
                    <TableCell className="text-right">{products.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
        );
}
