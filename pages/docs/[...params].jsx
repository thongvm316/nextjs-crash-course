import { useRouter } from 'next/router'

const Doc = () => {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params)

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for {params[0]} and {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for {params[0]}</h1>
  }

  return <h1>Docs Home Page</h1>
}

export default Doc

/* 
    1. [...params].jsx --> cant go to url/docs, will throw err 404 page not found
    2. Solve: change name of file to: [[...params]].jsx --> will render der default
*/
