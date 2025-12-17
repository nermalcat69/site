import Link from "next/link";
import Painting from "./components/Painting";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center dark:bg-black">
      <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-3xl w-full">
        <header className="mb-6 sm:mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold dark:text-white">
              Arjun Aditya
            </h2>
            <div className="flex  space-x-5 text-sm text-gray-600 dark:text-neutral-400">

              Founder of
              <a
                href="https://graycup.org"
                className="no-underline pl-1 hover:underline dark:text-neutral-300"
              >
                 Gray Cup
              </a>
            </div>
          </div>
          <div className="flex space-x-3">

          <a
            href="https://x.com/arjunaditya_"
            className="no-underline text-2xl dark:text-white"
          >
            𝕏
          </a>

          <a
            href="https://instagram.com/arjun_sustains"
            target="_blank"
            className="no-underline text-sm hover:underline dark:text-white"
          >
            <svg width="32" height="32" viewBox="0 -0.5 25 25" className="hover:text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" strokeWidth="1.5" strokeLinecap="round" className="stroke-black" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" strokeWidth="1.5" className="stroke-black" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" className="fill-black" fill="#000000"/>
              <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" className="stroke-black" strokeLinecap="round"/>
            </svg>
          </a>
          </div>
        </header>
        <p>I sell tea, matcha, and coffee on the internet involving as much as software possible to make things seamless and sustainable.</p>

        <p>Before Gray Cup, I spent years programming almost everyday. Freelancing early, then working at a czechian cloud startup even making it easy for newbie customers.</p>
        {/* <div className="space-y-4 sm:space-y-6">
          <h2 className="flex items-center text-lg sm:text-xl ">
            <Link href="/doge">DOGE Days</Link>
            <span className="inline-flex items-center rounded-full bg-[#ff6b6b] dark:bg-neutral-800 px-2 py-0.5 text-xs font-medium text-white dark:text-neutral-300 ring-1 ring-inset ring-red-600/10 dark:ring-neutral-600  uppercase ml-3 mt-0.5">
              New
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/god">GOD Mode</Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2025
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/dividends">
              Paying Freelancers in Equity and Dividends
            </Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2024
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <a
              href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397"
              style={{ fontWeight: 1000 }}
            >
              The Minimalist Entrepreneur
            </a>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2021
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/work">
              No Meetings, No Deadlines, No Full-Time Employees
            </Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2021
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/reflecting">
              Reflecting on My Failure to Build a Billion-Dollar Company
            </Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2019
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/border">Across the Border</Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2018
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/bubble">From Bubble to Bubble</Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2018
            </span>
          </h2>
        </div> */}




        <a href="https://instagram.com/shlpaints" className="mt-8 block">
          <div className="paintings grid grid-cols-1 md:grid-cols-3 gap-4">
            <Painting
              src="/painting.jpeg"
              alt="Digital painting of train station, 2019"
            />
            <Painting src="/rocks.png" alt="Oil painting of rocks, 2017" />
            <Painting src="/bhosle.jpeg" alt="Oil painting of woman, 2019" />
          </div>
        </a>
        <p className="text-xs text-end">view the previous/archived version of this website at <a href="https://archived.arjunaditya.xyz" target="_blank">archived.arjunaditya.xyz</a>.</p>

        <a
              className="mt-4 mb-2"
              href="https://cal.com/arjunaditya/30min?user=arjunaditya"
              target="_blank"
            >
              <Button variant="lightgraybg" size="minor">
                Schedule Call
              </Button>
            </a>

<a
              className="mt-4 mb-2"
              href="https://cal.com/arjunaditya/30min?user=arjunaditya"
              target="_blank"
            >
              <Button variant="blue" size="minor">
                Buy from Gray Cup
              </Button>
            </a>

        <a
            href="https://x.com/arjunaditya_"
            className="no-underline  dark:text-white"
          >
          <svg width="25" height="25" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>

</defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-140.000000, -7559.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

</path>
            </g>
        </g>
    </g>
</svg>
          </a>
      </main>
    </div>
  );
}
