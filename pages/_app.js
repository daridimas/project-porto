import '../styles/globals.css'
// baru
import '../styles/landingpage.css'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
      <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
