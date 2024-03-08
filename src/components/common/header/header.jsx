import { getDictionary, i18n } from "@/dictionaries/dictionaries";
import { getSession, logout } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Header = async({lang}) => {
    const session = await getSession();
    const dict=await getDictionary(lang)
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top ">
      <div className="container">
        <Link className="navbar-brand d-none d-md-block text-success rounded" href="/">
          <Image src="/teklifimgelsin.png" width={160} height={40} alt="teklifim-gelsin-logo"/>
        </Link>
        {session?.user?.name && <div className="nav-link active  text-success p-2 fw-bold " aria-current="page" href="#">
              {dict.products.welcome} {session?.user?.name} 👋
              </div>}
        <div>
          <ul className="nav">
            
            

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-success text-capitalize"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {lang.toUpperCase()}
              </a>
              <ul className="dropdown-menu">
                {i18n.locales.map((locale, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" href={`/${locale}`}>
                     <span className={`fi fi-${locale==="en"? "gb":locale}`}></span> {locale.toLocaleUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
            {session?.user?.name && (
            <form
              action={async () => {
                "use server";
                await logout();
                redirect(`${lang}`);
              }}
            >
              <button className="btn btn-success " type="submit">{dict.products.logout}</button>
            </form>
          )}
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
