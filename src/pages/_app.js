import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "components/NavBar";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="py-16 px-12 lg:px-48 font-latoBold">
      <NavBar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
