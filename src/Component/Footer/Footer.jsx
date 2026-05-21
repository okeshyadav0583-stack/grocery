import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="text-3xl font-bold text-zinc-950">
              Gr<span className="text-orange-500 uppercase">o</span>cify
            </a>

            <p className="mt-7 max-w-64 text-sm leading-7 text-slate-600">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>

            <p className="mt-7 text-sm text-zinc-800">
              2025 &copy; All Rights Reserved
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-zinc-950">Company</h3>

            <ul className="mt-7 space-y-6 text-base font-medium text-zinc-800">
              <li>
                <a href="#" className="transition hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-500">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-zinc-950">Support</h3>

            <ul className="mt-7 space-y-6 text-base font-medium text-zinc-800">
              <li>
                <a href="#" className="transition hover:text-orange-500">
                  Support center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-500">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-500">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-zinc-950">Stay Connected</h3>

            <p className="mt-7 max-w-72 text-base leading-7 text-slate-700">
              Questions or Feeback? We'd love to hear from you.
            </p>

            <form className="mt-7 flex h-15 max-w-60 rounded-xl bg-white p-1.5 shadow-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="min-w-0 flex-1 px-4 text-sm text-zinc-700 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-2xl font-bold text-white transition hover:bg-orange-600"
              >
                &gt;
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
