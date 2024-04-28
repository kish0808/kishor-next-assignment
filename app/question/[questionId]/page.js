import QuestionList from "../page";
import Image from "next/image";
import Link from 'next/link';

export default function QuestionDetails({ params }) {
  const { questionId } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="max-w-3xl mx-auto">
        {questionId === "1" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/2"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "2" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/1"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/3"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "3" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              A customer has reached out asking, “When should I choose to use Edge
              Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a reply
              to the customer.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/2"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/4"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "4" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              A customer has a project on Vercel and they want to redirect the /blog path to
              another website. Write a reply to the customer.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/3"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/5"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "5" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              Imagine that the customer from Question 4 responds with the following email.
              “I’m so frustrated. I’ve been trying to make this work for hours and I just
              can’t figure it out. It must be a platform issue so why don't you just fix it for
              me instead of asking me questions.”
              Write a reply to the customer addressing the concerns raised.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/4"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/6"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "6" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              A customer is just getting started with Vercel and has questions about
              recommended options for third-party integrations for Monitoring or Logging.
              Knowing that:
              a. Vercel has in-house observability products,
              b. Vercel likes to guide on processes, but
              c. Vercel doesn’t like to steer customers towards one solution or another, but
              demonstrates what the product can do.
              How would you respond to the customer?
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/5"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/7"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "7" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              A customer, new to Next.js and Vercel, asks about overages regarding serverless
              function execution. What would be the best way to help mitigate this? Feel free to
              use AI to help supplement your answer, but only use AI to help guide your
              answer and put it into your own words. You can help the customer by providing
              Vercel or Next.js resources if necessary.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/6"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/8"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
        {questionId === "8" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question:</h1>
            <p>
              How could we improve or alter this familiarization exercise?
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p></p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/7"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-1xl font-semibold`}>
                  Next -&gt;
                </h2>
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
