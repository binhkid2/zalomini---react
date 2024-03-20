const cRowOne =
  "flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0";

export default function Footer() {
  return (
    <>
      <div className="page-footer sveltekit-gradient {cBase}">
        <div className="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
          <section className={cRowOne}>
            <div className="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">
              <h1 className="h2">SiThuCong</h1>
              <div className="flex">
                <a href="#" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style=  {{ color: '#1877f2' }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="mx-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style={{ color: '#ff0000' }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-7 w-7"
                    style={{color: '#6a76ac' }}
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" md:grid grid-cols-4 gap-8">
              <div className="space-y-6">
                <ul className="space-y-3">
                  <li>
                    <a className="anchor" href="/introduction">
                      introduction
                    </a>
                  </li>

                  <li>
                    <a className="anchor" href="/faqs">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <ul className="space-y-3">
                  <li>
                    <a className="anchor" href="/terms-of-service">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a className="anchor" href="/private-policy">
                      Private Policy
                    </a>
                  </li>
                  <li>
                    <a className="anchor" href="/refund-policy">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <ul className="space-y-3">
                  <li>
                    <a
                      className="anchor"
                      href="https://yenvietsoft.com/about"
                      target="_blank"
                      rel="noreferrer"
                    >
                      YenVietSoft Organization
                    </a>
                  </li>
                  <li>
                    <a className="anchor" href="/contact">
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="p text-base font-semibold">
                  YenVietSoft <br /> Company Limited
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="anchor no-underline dark:text-primary-400"
                      href="#"
                    >
                      admin@yenvietsoft.com
                    </a>
                  </li>
                  <li>
                    <p className="!text-sm">
                      {" "}
                      Bach Dang Complex - 50 Bach Dang <br /> Hai Chau-Da Nang
                    </p>
                    <p className="p">Phone : 0777119994</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="opacity-20" />
        </div>
      </div>
    </>
  );
}
