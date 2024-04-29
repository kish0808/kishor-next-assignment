import Image from "next/image";

export default function QuestionList() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-8 lg:p-24">
      <div className="relative flex items-center justify-center mb-8 lg:mb-16">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          loading="eager"
        />
      </div>
      <h2 className={`mb-3 text-3xl font-semibold`} >Questions </h2>
      <br/>
      <br/>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {[...Array(8).keys()].map((index) => (
            <div key={index} className="mb-4">
              <a
                href={`/question/${index + 1}`}
                target="_self"
                rel="noopener noreferrer"
                className=""
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Question {index + 1}
                </h2>
              </a>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://youtu.be/GRpoRxmMWVw?si=l5v2ii8eO_Q1p3O1"
              title="YouTube video player"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
      <a
        href="/"
        className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
        target="_self"
        rel="noopener noreferrer"
      >
        &lt;- Back to Home
      </a>
    </main>
  );
}
