import Image from 'next/image'
import Link from "next/link"
import cardStyles from '../../styles/cards.module.css'
export default async function Page() {
    const data = await fetch('https://api-mainnet.magiceden.dev/v2/collections?limit=500',{
        method:"GET",
        paging: true
    }).then((res) =>
      res.json()
    
    )
   console.log(data)
    return (
      
        <>

<Link  href={ `/api/top`} > <div className={cardStyles.otherButton} >check out top collections </div></Link>
  <div className={cardStyles.container}>
        
  {data.map(item => ( 
    <Link key={item.id} href={ `latest/collection/${item.symbol}`} > 

    <div className={cardStyles.card} >
       <Image
     src={item.image ? item.image : "" }
     width={400}
     height={400}
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

