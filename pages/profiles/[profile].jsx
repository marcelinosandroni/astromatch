import { useRouter } from "next/router"

export default function ProfileDinamic() {
  const route = useRouter()
  return <h1>Oi</h1>
}

// export async function getStaticProps(context) {

//   return {
//     props: data
//   }
// }
