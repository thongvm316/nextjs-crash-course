const News = ({ articles }) => {
  return (
    <>
      <h1>List News Products</h1>
      {articles.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.id} {item.title} {item.description}
            </h2>
          </div>
        )
      })}
    </>
  )
}

export default News

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/news')
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}
