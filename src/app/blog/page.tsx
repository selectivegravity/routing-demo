import { Metadata } from "next";
import Link from "next/link"

export const metadata:Metadata = {
    title: "Blog"
}

export default function Blog(){
    return (
    <>
    <Link href="/"> Navigate to Home Page</Link>
    <h1> My Blogs </h1>
    </>);
}