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
                href="https://graycup.in"
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
          I sell tea, matcha, and coffee with a long-term view on sustainability, supply chains, and people.<br />
          I try to involve as much as softwares possible to make things seamless with as minimum carbon impact as possible.
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
          My hobbies involve designing, composting, running and observing how my body reacts.
        </p>
        <a
          className="inline-block mt-2"
          href="https://cal.com/arjunaditya/30min?user=arjunaditya"
          target="_blank"
        >
          <Button variant="lightgraybg" size="minor">
            Schedule Call
          </Button>
        </a>
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

      </main>
    </div>
  );
}
