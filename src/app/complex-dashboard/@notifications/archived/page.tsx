import Card from "@/app/components/card";
import Link from "next/link"

export default function ArchivedNotifications(){
    return (
    <Card> 
        <div>Archived Notificaion Component </div>
        <Link href="/complex-dashboard">Default</Link>
    </Card>
    );
}