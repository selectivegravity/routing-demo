import Link from "next/link"

export default function Products(){
    const prodId = 100;
    return(
        <>
        <Link href="/"> Navigate to Home Page </Link>

        <h1>Product List</h1>
        <h2><Link href="/products/1">Product 1</Link></h2>
        <h2><Link href="/products/2">Product 2</Link></h2>
        <h2><Link href="/products/3" replace>Product 3</Link></h2>
        <h2> <Link href={`products/${prodId}`}> Product 100</Link> </h2>
        </>
    );
}