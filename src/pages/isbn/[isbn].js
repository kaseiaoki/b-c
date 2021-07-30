import Link from 'next/link'
import { useRouter } from 'next/router'
import getOpenBD from "../../api/openBD"


const Biblio = ({title, author}) => {
  const router = useRouter()
  const { isbn } = router.query
  const json = (async() => {
   return await getOpenBD("9784150503321")
  })();
//   {
//     "isbn": "9784150503321",
//     "title": "禅とオートバイ修理技術",
//     "volume": "",
//     "series": "",
//     "publisher": "早川書房",
//     "pubdate": "2008-02",
//     "cover": "https://cover.openbd.jp/9784150503321.jpg",
//     "author": "Pirsig,RobertM／著 Pirsig,RobertM.／著 五十嵐美克／翻訳 ほか"
//   }

  return (
    <>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
        <h1 class="title">{title} </h1>
        <h2 class="subtitle">{author}</h2>
        </div>
      </div>
    </section>
    <section class="section">
   </section>
  </>
  )

}

export default Biblio

export async function getServerSideProps({params}) {
   const json = await getOpenBD(params.isbn)
   await console.log(json)
const summary = json[0].summary;
const title = summary.title
const author = summary.author
  return {
    props: {
      title,
      author
    },
  }
}