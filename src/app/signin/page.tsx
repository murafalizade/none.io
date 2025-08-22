import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
};

const SigninPage = () => {
  return (
      <>
        <section className="relative z-10 min-h-screen flex items-center justify-center bg-[#0B0F1A] text-white overflow-hidden">
          <div className="container">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="shadow-three bg-[#1A1F2E] mx-auto max-w-[500px] rounded-md px-6 py-10 sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
                    Sign in to your account
                  </h3>
                  <p className="mb-11 text-center text-base font-medium text-gray-400">
                    Login to your account for a faster checkout.
                  </p>

                  {/* Google Button */}
                  <button className="mb-6 flex w-full items-center justify-center rounded-xs border border-gray-600 bg-[#2C303B] px-6 py-3 text-base text-gray-200 transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:text-primary">
                  <span className="mr-3">
                    {/* Google Icon */}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                            d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                            fill="#4285F4"
                        />
                        <path
                            d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L1.12973 14.3766C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                            fill="#34A853"
                        />
                        <path
                            d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L1.19282 5.4624C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                            fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                    Sign in with Google
                  </button>

                  {/* Divider */}
                  <div className="mb-8 flex items-center justify-center">
                    <span className="hidden h-[1px] w-full max-w-[70px] bg-gray-700 sm:block"></span>
                    <p className="w-full px-5 text-center text-base font-medium text-gray-400">
                      Or, sign in with your email
                    </p>
                    <span className="hidden h-[1px] w-full max-w-[70px] bg-gray-700 sm:block"></span>
                  </div>

                  {/* Form */}
                  <form>
                    <div className="mb-8">
                      <label
                          htmlFor="email"
                          className="mb-3 block text-sm text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className="w-full rounded-xs border border-gray-600 bg-[#2C303B] px-6 py-3 text-base text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                          htmlFor="password"
                          className="mb-3 block text-sm text-gray-300"
                      >
                        Your Password
                      </label>
                      <input
                          type="password"
                          name="password"
                          placeholder="Enter your Password"
                          className="w-full rounded-xs border border-gray-600 bg-[#2C303B] px-6 py-3 text-base text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                      <label className="flex cursor-pointer items-center text-sm font-medium text-gray-400 select-none">
                        <input type="checkbox" className="mr-2" />
                        Keep me signed in
                      </label>
                      <a
                          href="#0"
                          className="text-sm font-medium text-primary hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="mb-6">
                      <button className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300">
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="text-center text-base font-medium text-gray-400">
                    Don’t you have an account?{" "}
                    <Link href="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default SigninPage;
