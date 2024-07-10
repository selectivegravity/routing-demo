import Card from "@/app/components/card";
import Link from "next/link"

export default function Notifications(){
    return (
    <Card> 
        <div>Default Notificaion Component </div>
        <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
    );
}