import { redirect } from "next/navigation";
import { login } from "@/lib/auth";
import "./style.scss";
import {  i18n } from "@/dictionaries/dictionaries";



export default async function SignUp({ params }) {

  return (
    <div className="signup-form">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="card signup-card">
            <div className="card-body">
              <h6 className="fst-italic mb-3 ">Please enter your email and password!</h6>
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
                <div class="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
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

                <div class="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
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

                <button className="btn btn-outline-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
