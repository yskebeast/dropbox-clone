import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919]">
        <div className="p-10 flex flex-col bg[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold ">
            welcome to CloudFile Hub
            <br />
            <br />
            Secure and Smart File Sync
          </h1>
          <p className="pb-20 ">
            Access your files anytime, anywhere—whether on your desktop, laptop,
            smartphone, or tablet. Seamlessly share and collaborate on the same
            files.
          </p>

          <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit ">
            try it for free
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className=" bg[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080-ja.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Description</p>
      <p className="text-center font-light p-2 ">
        CloudFile Hub simplifies your digital life, providing access to your
        important files anytime, anywhere. With cloud storage that's always
        within reach and seamless file synchronization, keep your data at your
        fingertips.
      </p>
    </main>
  );
}
