import Head from "next/head";
import Login from "../Components/communaute/Login";

const login = () => {
  return ( 
    <>
    <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
      <Login />
    </>
   );
}
 
export default login;