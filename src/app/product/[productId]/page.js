export const generateMetadata = async({params}) => {
  const title = await new Promise((res, rej) => {
    setTimeout(()=>{
      res(`Macbook ${params.productId}`)
    },[100])
  })
  return {
    title: `Product Metadata ${title}`
  }
}


export default function SpecificProductPage({ params }) {
  return <div>Specific Product Page {params.productId}</div>;
}
