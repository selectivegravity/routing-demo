import {notFound} from "next/navigation"

export default function Review({params}:{
    params:{reviewId:string, productId: string}
}){
    if(parseInt(params.reviewId)>1000){
        notFound();
    }
    return <>
    <h1>Review Id: {params.reviewId} for Product Id: {params.productId}</h1> 
    </>;
}