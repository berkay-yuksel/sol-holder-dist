import Image from 'next/image'
import Link from "next/link"
import cardStyles from '../styles/cards.module.css'
export default async function Page() {
    const data = await fetch('https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections?timeRange=30d&limit=100',{
        method:"GET",
        paging: true
    }).then((res) =>
      res.json()
    
    )
   console.log(data)
    return (
      
        <>
  <div className={cardStyles.container}>
        
  {data.map(item => ( 
    <Link href={ `api/collection/${item.symbol}`} > 

    <div className={cardStyles.card} key={item.id}>
       <Image
     src={item.image ? item.image : "" }
     width={200}
     height={200}
     alt={item.image}
     placeholder="blur"
     blurDataURL="data:..."
   />
       <h5> {item.name}</h5>
    
   </div>
    </Link>


))}
  </div>
      </>
    )
  }

