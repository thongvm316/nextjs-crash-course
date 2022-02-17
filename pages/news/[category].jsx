const ArticelListCategory = ({ articles: data, category }) => {
  return (
    <div>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.id} {item.title}
              <p>{item.description}</p>
            </h2>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default ArticelListCategory

export const getServerSideProps = async (context) => {
  const {
    params: { category },
    req,
    res,
  } = context

  console.log(context)

  const resp = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await resp.json()

  return {
    props: {
      articles: data,
      category,
    },
  }
}
