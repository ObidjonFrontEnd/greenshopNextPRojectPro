import HeaderSm from '../Components/header/Responsive/headerSm'
import AddButton from './components/addButton'
import Header from './components/header'
import PostList from './components/postlist'
import SearchBar from './components/search'

async function getData(query) {
  try {
    const url = query
      ? `https://dummyjson.com/posts/search?q=${encodeURIComponent(query)}`
      : 'https://dummyjson.com/posts'

    const res = await fetch(url)
    if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`)

    const data = await res.json()
    return data.posts
  } catch (error) {
    console.error('Ошибка при загрузке постов:', error)
    return []
  }
}

export default async function Page({ searchParams }) {
  const query = searchParams?.search?.trim() || ''
  const posts = await getData(query)

  return (
    <div className="max-w-[1200px] mx-auto px-[15px] mt-[50px]">
      <Header />
      <SearchBar />
      <AddButton />
      <PostList posts={posts} />
      <div className="md:hidden">
        <HeaderSm />
      </div>
    </div>
  )
}
