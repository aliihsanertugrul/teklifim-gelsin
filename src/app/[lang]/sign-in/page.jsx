import { redirect } from "next/navigation";
import { login } from "@/lib/auth";
import "./style.scss";

export default async function SignUp() {
  return (
    <div className="container signup-form">
      <div className="row justify-content-center ">
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="card signup-form">
            <div className="card-body">
              <form
                action={async (formData) => {
                  "use server";
                  await login(formData);
                  redirect("/");
                }}
              >
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    defaultValue="dummy@test.com"
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    defaultValue="Wer123"
                  />
                </div>

                <button className="btn btn-primary " type="submit">
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
