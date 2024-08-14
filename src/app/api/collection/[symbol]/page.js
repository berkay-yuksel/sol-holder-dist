import tableStyles from '../../../styles/table.module.css'
export default async function Page({params}) {
    const data = await fetch('https://api-mainnet.magiceden.dev/v2/collections/'+`${params.symbol}`+'/holder_stats?limit=500',{
        method:"GET"  }).then((res) =>
      res.json()
    
    )
 console.log(data)
    return (
   
        <>
  <div className={tableStyles.container}>
    <h1>{data.symbol ? data.symbol : params.symbol}</h1>
    <h5>unique holders: {data.uniqueHolders}</h5>
    <h5>total supply: {data.totalSupply}</h5>
 {   data.tokenHistogram.bars == undefined ? " Data could not found!"  :  <table>
  <tr>
    <th>range</th>
    <th>holders</th>
    <th>percentage</th>
  </tr>
  <tr>
    <td>1</td>
    <td>{data.tokenHistogram.bars[0] == undefined ? "0":`${data.tokenHistogram.bars[0].hight}`}</td>
    <td>%{data.tokenHistogram.bars[0] == undefined ? "0" :Math.round((100 * data.tokenHistogram.bars[0].hight) / data.uniqueHolders)}</td>
  </tr>
  <tr>
    <td>2-5</td>
    <td>{data.tokenHistogram.bars[1] == undefined ? "0":`${data.tokenHistogram.bars[1].hight}`}</td>
   
    <td>%{data.tokenHistogram.bars[1] == undefined ? "0" :Math.round((100 * data.tokenHistogram.bars[1].hight) / data.uniqueHolders)}</td>
  </tr>
  <tr>
    
    <td>6-24</td>
    <td>{data.tokenHistogram.bars[2] == undefined ? "0":`${data.tokenHistogram.bars[2].hight}`}</td>
    <td>%{data.tokenHistogram.bars[2] == undefined ? "0" :Math.round((100 * data.tokenHistogram.bars[2].hight) / data.uniqueHolders)}</td>
  </tr>
  <tr>
    <td>25-49</td>
    <td>{data.tokenHistogram.bars[3] == undefined ? "0":`${data.tokenHistogram.bars[3].hight}`}</td>
    <td>%{data.tokenHistogram.bars[3] == undefined ? "0" : Math.round((100 * data.tokenHistogram.bars[3].hight) / data.uniqueHolders)}</td>
  </tr>
  <tr>
    <td>50+</td>
    <td>{data.tokenHistogram.bars[4] == undefined ? "0":`${data.tokenHistogram.bars[4].hight}`}</td>
    <td>%{data.tokenHistogram.bars[4] == undefined ? "0" :Math.round((100 * data.tokenHistogram.bars[4].hight) / data.uniqueHolders)}</td>
  </tr>

</table>}
  </div>
      </>

    )
  }

