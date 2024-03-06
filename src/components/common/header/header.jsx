import { i18n } from "@/dictionaries/dictionaries";
import { getSession, logout } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Header = async({lang}) => {
    const session = await getSession();
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top ">
      <div className="container">
        <a className="navbar-brand d-none d-md-block text-success rounded" href="#">
          Teklifim Gelsin
        </a>
        {session?.user?.name && <div className="nav-link active  text-success p-2 fw-bold " aria-current="page" href="#">
              Welcome {session?.user?.name} 👋
              </div>}
        <div>
          <ul className="nav">
            
            <li className="nav-item">
            {session?.user?.name && (
            <form
              action={async () => {
                "use server";
                await logout();
                redirect(`${lang}`);
              }}
            >
              <button className="btn btn-success " type="submit">Logout</button>
            </form>
          )}
              
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-success text-capitalize"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {lang}
              </a>
              <ul className="dropdown-menu">
                {i18n.locales.map((locale, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" href={`/${locale}`}>
                     <span className={`fi fi-${locale==="en"? "gb":locale}`}></span> {locale}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
