const RANDOM_URL=process.env.BASE_URL_RANDOM
const TODAY_URL=process.env.BASE_URL_TODAY 


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    console.log(searchParams)
    const id = searchParams.get('id')
    const res = await fetch(`${RANDOM_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
    })
    const product = await res.json()
   
    return Response.json({ product })
  }