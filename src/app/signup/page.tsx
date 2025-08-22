import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign Up Page for Startup Nextjs Template",
};

const SignupPage = () => {
  return (
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28 bg-gray-900 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:shadow-none dark:bg-gray-800 mx-auto max-w-[500px] rounded-sm bg-gray-800 px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="text-gray-300 mb-11 text-center text-base font-medium">
                  It’s totally free and super easy
                </p>

                {/* Social Buttons */}
                <button className="mb-6 flex w-full items-center justify-center rounded-xs border border-gray-700 bg-gray-700 px-6 py-3 text-base text-gray-200 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary">
                  <span className="mr-3"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_95:967)"> <path d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216" fill="#4285F4" /> <path d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001" fill="#34A853" /> <path d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z" fill="#FBBC05" /> <path d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z" fill="#EB4335" /> </g> <defs> <clipPath id="clip0_95:967"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg> </span>
                  Sign in with Google
                </button>


                <div className="mb-8 flex items-center justify-center">
                  <span className="bg-gray-600 hidden h-[1px] w-full max-w-[60px] sm:block"></span>
                  <p className="text-gray-300 w-full px-5 text-center text-base font-medium">
                    Or, register with your email
                  </p>
                  <span className="bg-gray-600 hidden h-[1px] w-full max-w-[60px] sm:block"></span>
                </div>

                {/* Form */}
                <form>
                  {["Full Name", "Work Email", "Your Password"].map((label, idx) => (
                      <div className="mb-8" key={idx}>
                        <label className="mb-3 block text-sm text-white">{label}</label>
                        <input
                            type={label === "Work Email" ? "email" : label === "Your Password" ? "password" : "text"}
                            placeholder={`Enter your ${label.toLowerCase()}`}
                            className="w-full rounded-xs border border-gray-700 bg-gray-700 px-6 py-3 text-gray-200 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                      </div>
                  ))}

                  {/* Checkbox */}
                  <div className="mb-8 flex items-start">
                    <label className="flex cursor-pointer text-sm font-medium text-gray-300 select-none">
                      <input type="checkbox" className="sr-only" />
                      <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-sm border border-gray-600 bg-gray-700">
                        <span className="opacity-0">✓</span>
                      </div>
                      By creating account you agree to the{" "}
                      <a href="#0" className="ml-1 text-primary hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#0" className="ml-1 text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div className="mb-6">
                    <button className="w-full rounded-xs bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 hover:bg-primary/90">
                      Sign up
                    </button>
                  </div>
                </form>

                <p className="text-gray-300 text-center text-base font-medium">
                  Already using Startup?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 z-[-1]">
        </div>
      </section>
  );
};

export default SignupPage;
