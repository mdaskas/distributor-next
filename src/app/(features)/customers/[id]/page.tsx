import { notFound } from "next/navigation";

type TProps = Readonly<{
    params: Promise<{
        id: string;
    }>;
}>;

export default async function Customer({params}: TProps) {
    const id = (await params).id;

    
    if (!id) {
        notFound();
    }
    
    return (
        <div>
            <h1>Customer {id}</h1>
        </div>
    );
}
