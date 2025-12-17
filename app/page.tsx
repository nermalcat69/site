import Link from "next/link";
import { Button } from "./components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center dark:bg-black">
      <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-3xl w-full">
        <header className="mb-6 sm:mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold dark:text-white">
              Arjun Aditya
            </h1>
            <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1">
              Founder of
              <a
                href="https://graycup.org"
                className="no-underline pl-1 font-medium hover:underline text-blue-700 dark:text-neutral-300"
              >
                Gray Cup
              </a>
            </p>
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
              <svg
                width="32"
                height="32"
                viewBox="0 -0.5 25 25"
                className="hover:text-blue-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="stroke-black dark:stroke-white"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                  strokeWidth="1.5"
                  className="stroke-black dark:stroke-white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="15.5"
                  y="9"
                  width="2"
                  height="2"
                  rx="1"
                  transform="rotate(-90 15.5 9)"
                  className="fill-black dark:fill-white"
                  fill="#000000"
                />
                <rect
                  x="16"
                  y="8.5"
                  width="1"
                  height="1"
                  rx="0.5"
                  transform="rotate(-90 16 8.5)"
                  className="stroke-black dark:stroke-white"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </header>
        <p className="mt-6 mb-4 text-sm sm:text-base leading-relaxed dark:text-neutral-300">
          I sell tea, matcha, and coffee on the internet involving as much as
          software possible to make things seamless and sustainable.
        </p>

        <p className="mb-6 text-sm sm:text-base leading-relaxed dark:text-neutral-300">
          Before{" "}
          <a className="underline" href="https://graycup.org/" target="_blank">
            Gray Cup
          </a>
          , I spent years programming almost everyday during my teenage years. Even freelancing, then
          working at a czechian cloud startup even making it easy for newbie
          customers.
        </p>

        <p className="mb-6 text-sm sm:text-base leading-relaxed dark:text-neutral-300">
          I still code as it's the biggest leverage in this age and a lot of businesses still don't understand the value of it. I try to use Open Source as much as possible.
        </p>
        <p className="mb-6 text-sm sm:text-base leading-relaxed dark:text-neutral-300">
          I believe growth requires space and time. Constant stimulation erodes originality.
        </p>
          <div className="mt-8 sm:mt-12 block grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <Image
              src="/home/coconut.webp"
              alt="Indian Coconuts, Old Delhi, 2025"
              draggable={false}
              width={500}
              height={500}
            />
            <Image
              src="/home/chai.webp"
              alt="Father drinking chai on a Rock, Himachal Pradesh, 2024"
              draggable={false}
              width={500}
              height={500}
            />
            <Image
              src="/home/arjun-aditya3.webp"
              alt="Picture of Arjun Aditya, 2025"
              draggable={false}
              width={500}
              height={500}
            />
          </div>

        <p className="text-xs text-end mt-4 dark:text-neutral-400">
          view the previous/archived version of this website at{" "}
          <a
            className="underline"
            href="https://archived.arjunaditya.xyz"
            target="_blank"
          >
            archived.arjunaditya.xyz
          </a>
          .
        </p>

        <a
          className="inline-block mt-6 mb-2"
          href="https://cal.com/arjunaditya/30min?user=arjunaditya"
          target="_blank"
        >
          <Button variant="lightgraybg" size="minor">
            Schedule Call
          </Button>
        </a>


        <a
          href="https://x.com/arjunaditya_"
          className="no-underline  dark:text-white"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                transform="translate(-140.000000, -7559.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#142]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </main>
    </div>
  );
}
