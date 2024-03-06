import { Inter } from "next/font/google";
import { login, logout, getSession } from "@/lib/auth";
import { i18n } from "@/dictionaries/dictionaries";
import Link from "next/link";
import { redirect, rewrite } from "next/navigation";
import BootstrapProvider from "@/helpers/providers/bootstrap-provider";
import Header from "@/components/common/header/header";
import "@/styles/index.scss"
import "flag-icons/css/flag-icons.min.css";
import Footer from "@/components/common/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params  }) {
  const session = await getSession();
  return (
    <html lang="en" className={`${inter.variable} h-100`}>
      <body className="d-flex flex-column justify-content-between h-100">
        <BootstrapProvider>
        <Header lang={params.lang}/>
          
          

          {/* {i18n.locales.map((locale, index) => (
            <Link key={index} href={`/${locale}`}>
              <button className="btn btn-primary">{locale}</button>
            </Link>
          ))} */}
        <main>{children}</main>
        {/* {session?.user?.name && (
            <form
              action={async () => {
                "use server";
                await logout();
                redirect("/");
              }}
            >
              <button type="submit">Logout</button>
            </form>
          )} */}
          <Footer/>
        </BootstrapProvider>
        
      </body>
    </html>
  );
}
