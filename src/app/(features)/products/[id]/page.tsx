import { notFound } from "next/navigation";

type TProps = Readonly<{
    params: Promise<{
        id: string;
    }>;
}>;

export default async function Product({params}: TProps) {
    const id = (await params).id;

    
    if (!id) {
        notFound();
    }
    
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    );
}
