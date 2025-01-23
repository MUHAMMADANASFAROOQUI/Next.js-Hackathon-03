import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary3 md:bg-white border-b-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start p-6 md:px-16 md:py-10">
        {/* Logo and Vision */}
        <div className="mb-10 md:mb-0">
          <Link
            href="/"
            className="font-bold text-[32px] text-primary1 leading-[150%]"
          >
            MORENT
          </Link>
          <p className="mt-6 text-[16px] text-text1 md:text-text3 font-medium leading-[150%]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between gap-10 md:gap-16 md:w-2/3">
          {/* About Section */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4">About</h2>
            <ul className="space-y-3">
              {[
                "How it works",
                "Featured",
                "Partnership",
                "Business Relation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-[16px] font-medium text-text3 opacity-60 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4">Community</h2>
            <ul className="space-y-3">
              {["Events", "Blogs", "Podcast", "Invite a friend"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-[16px] font-medium text-text3 opacity-60 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4">Socials</h2>
            <ul className="space-y-3">
              {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-[16px] font-medium text-text3 opacity-60 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6 pb-8 px-6 md:px-16">
        <p className="text-[16px] font-semibold text-center md:text-left">
          ©2022 MORENT. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="text-[16px] font-semibold hover:underline">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-[16px] font-semibold hover:underline">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
