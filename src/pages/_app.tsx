import "@/styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from 'next/app'
import store from "@/redux/store";
import type { Page } from '../types/page'

type Props = AppProps & {
  Component: Page
}
export default function App ({ Component, pageProps }: Props)  {
  const getLayout = Component.getLayout ?? (page => page)

  return (
  
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  
  )
}

