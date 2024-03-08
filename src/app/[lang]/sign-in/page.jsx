import { redirect } from "next/navigation";
import { login } from "@/lib/auth";
import "./style.scss";
import {  getDictionary, i18n } from "@/dictionaries/dictionaries";



export default async function SignUp({ params }) {
  console.log(params)
  const dict=await getDictionary(params.lang);

  return (
    <div className="signup-form">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4">
          <div className="card signup-card">
            <div className="card-body">
              <h6 className="fst-italic mb-3 ">{dict.products.loginTitle}</h6>
           <form
                action={async (formData) => {
                  "use server";
                  await login(formData);
                  if(i18n.locales.some(locale => locale ===params.lang)){
                    redirect(`/${params.lang}`);
                  }else{
 redirect(`/not-found`);
                  }
                }}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  {dict.products.email}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    defaultValue="dummy@test.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    {dict.products.password}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    defaultValue="Wer123"
                  />
                </div>

                <div className="btn-container">
                <button className="btn fw-bold" type="submit">
                {dict.products.login}
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
