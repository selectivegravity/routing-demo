import Card from "@/app/components/card";
import Link from "next/link";

export default function F1(){
    return (
    <Card> 
        <div> F1 Page </div>
        <Link href="/f1/f2">F2</Link>
    </Card>
    );
}