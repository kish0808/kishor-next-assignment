import Image from "next/image";

export default function QuestionDetails({ params }) {
  const { questionId } = params;
  const jsonCode = {
    redirects: [
      { source: '/blog', destination: 'https://www.example.com/blog', statusCode: 301 }
    ]
  };
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
            <h1 className="text-1xl font-bold mb-4">Question-1 :</h1>
            <p>
              Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              The customer had complained about heavy page load times and was facing challenges with their website's SEO performance. Despite having great content and products, their site was not ranking well on search engines, so they tried basic methods to improve the SEO performance.
              <br />
              <br />
              To address their concerns, we conducted a demo session to explain the Core Web Vitals metrics, which are essential for improving SEO:
              <br />
              <br />
              1. Largest Contentful Paint (LCP): LCP measures the time it takes for the largest content element on a web page to load.
              <br />
              <br />
              2. First Input Delay (FID): FID measures the time it takes for a web page to become interactive.
              <br />
              <br />
              3. Cumulative Layout Shift (CLS): CLS measures the visual stability of a web page.
              <br />
              <br />
              Core Web Vitals are a crucial element of SEO strategy. By optimizing website for LCP, FID, and CLS, you can enhance the user experience.
              After implementing these optimizations, within a month, they saw significant improvements in SEO and page load times.
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/2"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "2" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-2 :</h1>
            <p>
              How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <h2>Framework Comparison: Next.js vs Svelte</h2>
            <br />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Feature</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Next.js</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Svelte</th>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Routing</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Client-side and server-side routing support</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Client-side routing only</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Bundle Size</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Initial load may have a larger bundle size</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Generally smaller bundle size due to compiler optimizations</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Developer Experience</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Good developer experience with hot module reloading and fast refresh</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Efficient development with reactive declarations and auto-updating components</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Server-side Rendering</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Full support for server-side rendering</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Does not support server-side rendering out of the box</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Performance</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Generally good performance, especially with server-side rendering</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Excellent performance due to efficient DOM updates and minimal runtime overhead</td>
                </tr>
              </tbody>
            </table>

            <br />
            <br />
            <p>
              Next.js is a React framework that offers strong support for server-side rendering,
              a robust routing system, and good developer experience with features like hot module reloading.
              Svelte, on the other hand, is a compiler-based framework that focuses on producing highly optimized and performant applications with a simple and reactive approach to building UI components.
            </p>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/1"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/3"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "3" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-3 :</h1>
            <p>
              A customer has reached out asking, “When should I choose to use Edge
              Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a reply
              to the customer.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              When deciding between Edge Functions, Serverless Functions, or Edge Middleware on Vercel, consider the following points:
              <br />
              <br />
              1. Edge Functions: Use Edge Functions when you need to execute code at the edge, closer to your users, for tasks like dynamic content rendering or security checks. This can improve performance and reduce latency.
              <br />
              <br />
              2. Serverless Functions: Serverless Functions are suitable for backend tasks that can be executed independently, such as handling API requests, processing form submissions, or interacting with databases. They offer scalability and cost-effectiveness, as you only pay for what you use.
              <br />
              <br />
              3. Edge Middleware: Edge Middleware is used for intercepting and modifying requests at the edge, allowing you to add custom logic or modify responses before they reach your origin server. This can be useful for tasks like URL rewriting, header manipulation, or caching.
              <br />
              <br />
              The choice between these options depends on your specific use case and requirements.
              If you need further assistance in deciding which option is best for your project, feel free to reach out. We're here to help.
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/2"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/4"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "4" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-4 :</h1>
            <p>
              A customer has a project on Vercel and they want to redirect the /blog path to
              another website. Write a reply to the customer.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              Thank you for reaching out! To redirect the /blog path on your Vercel project to another website, we can use URL redirects.
              <br />
              <br />
              Could you please provide the URL of the website you want to redirect the /blog path to? Additionally,
              do you want the redirection to be temporary or permanent?
              <br />
              <br />
              In Next.js, you can achieve this by adding a routing configuration to your vercel.json or next.config.js file.
              For example, to redirect /blog to https://www.example.com/blog, you can use the following configuration:
              <br />
              <br />
            </p>
            <pre>{JSON.stringify(jsonCode, null, 2)}</pre>
            <br />
            <br />
            <p>
              Make sure to replace "https://www.example.com/blog" with the actual URL you want to redirect to. Once you've added this configuration,
              redeploy your project to Vercel, and the /blog path should redirect to the specified website.
              <br />
              <br />
              If you need further assistance or have any questions, feel free to ask!
            </p>
            <br />
            <br />
            <span>
              <span>Reference :</span>{' '}
              <a
                href="https://nextjs.org/docs/app/api-reference/functions/redirect"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nextjs.org/docs/app/api-reference/functions/redirect
              </a>
            </span>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/3"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/5"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "5" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-5 :</h1>
            <p>
              Imagine that the customer from Question 4 responds with the following email.
              <br />
              <br />
              “I’m so frustrated. I’ve been trying to make this work for hours and I just
              can’t figure it out. It must be a platform issue so why don't you just fix it for
              me instead of asking me questions.”
              <br />
              <br />
              Write a reply to the customer addressing the concerns raised.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              I understand the frustration you're experiencing. It can be really challenging when things aren't working as expected,
              especially after putting in so much effort.
            </p>
            <br />
            <p>
              To clarify, we're here to help resolve any issues you're facing with the platform. However, to better assist you, could you provide more specific details about the problem you're encountering? Any additional information,
              such as error messages or screenshots, would be incredibly helpful.
            </p>
            <p>
              In the meantime, here's the code snippet again for your reference:
            </p>
            <br />
            <pre>{JSON.stringify(jsonCode, null, 2)}</pre>
            <br />
            <p>
              Please let us know if there's anything else we can do to assist you further.
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/4"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/6"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "6" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-6 :</h1>
            <p>
              A customer is just getting started with Vercel and has questions about
              recommended options for third-party integrations for Monitoring or Logging.
              Knowing that:
              <br />
              a. Vercel has in-house observability products,
              <br />
              b. Vercel likes to guide on processes, but
              <br />
              c. Vercel doesn’t like to steer customers towards one solution or another, but
              demonstrates what the product can do.How would you respond to the customer?
            </p>
            <br />
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              Thank you for reaching out with your questions about Monitoring and Logging options for your Vercel project.
              To provide the best guidance, I've structured my response to address your needs and concerns.
              <br />
              <br />
              <strong>1. Vercel's Monitoring and Logging Features:</strong>
              <br />
              <br />
              Vercel offers integrated solutions for Monitoring and Logging, with inherent integration for third-party log-drain systems
              Please prefer bellow documentation for detailed information:
              <br />
              <br />
              <span>
                <span>Log Drains :</span>{' '}
                <a
                  href="https://vercel.com/docs/observability/log-drains/log-drains-reference"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com/docs/observability/log-drains/log-drains-reference
                </a>
              </span>
              <br />
              <span>
                <span>Observability  :</span>{' '}
                <a
                  href="https://vercel.com/docs/observability"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com/docs/observability
                </a>
              </span>
              <br />
              <br />
              <strong>2. Why Logs are Important :</strong>
              <br />
              <br />
              Logs play a crucial role in troubleshooting and investigating issues that developers may encounter.
              Our Log Monitoring dashboard provides developers with a visual representation of logs, making it easier to identify and resolve issues quickly.
              You can find example queries for the Log Monitoring dashboard, along with instructions on how to modify existing queries or create new ones,
              <br />
              <br />
              in our Monitoring Reference guide (https://vercel.com/docs/observability/monitoring/monitoring-reference#example-queries).
              <span>
                <span>in our Monitoring Reference guide</span>{' '}
                <a
                  href="https://vercel.com/docs/observability/monitoring/monitoring-reference#example-queries"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com/docs/observability/monitoring/monitoring-reference#example-queries
                </a>
              </span>
              <br />
              <br />
              <strong>3 Recommendation for Third-Party Log-Drain Integration:</strong>
              <br />
              <br />
              <span>
                <span>You can explore the available third-party integrations for logging on our Integrations page</span>{' '}
                <a
                  href="https://vercel.com/integrations#logging"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com/integrations#logging
                </a>
              </span>
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/5"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/7"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "7" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-7 :</h1>
            <p>
              A customer, new to Next.js and Vercel, asks about overages regarding serverless
              function execution. What would be the best way to help mitigate this? Feel free to
              use AI to help supplement your answer, but only use AI to help guide your
              answer and put it into your own words. You can help the customer by providing
              Vercel or Next.js resources if necessary.
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              To help mitigate overages regarding serverless function execution on Vercel, it's important to understand and monitor the factors that contribute to these charges.
              Here are some steps you can take:
              <br />
              <br />
              1.  <strong>Monitor usage:</strong> Keep an eye on function invocations, compute time, and data transfer.
              <br />
              <br />
              2.  <strong>Optimize code:</strong> Make your code more efficient to reduce compute time and data transfer.
              <br />
              <br />
              3. <strong>Use caching:</strong> Minimize repetitive computations by implementing caching mechanisms.
              <br />
              <br />
              4.  <strong>Follow best practices:</strong> Design functions to be stateless and handle errors efficiently.
              <br />
              <br />
              5.  <strong>Set limits:</strong> Set appropriate limits on your usage and adjust them as needed.
              <br />
              <br />
              6.  <strong>Continuous improvement:</strong> Regularly review and optimize your usage patterns.
              <br />
              <br />
              By following these steps and actively managing your usage of serverless functions on Vercel, you can help mitigate overages and optimize your costs effectively.
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/6"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question/8"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
        {questionId === "8" && (
          <>
            <h1 className="text-1xl font-bold mb-4">Question-8 :</h1>
            <p>
              How could we improve or alter this familiarization exercise?
            </p>
            <br></br>
            <h1 className="text-1xl font-bold mb-4">Answer:</h1>
            <p>
              It's great that you've structured the assignment well. To improve it further, consider the following:
              <br />
              <br />
              1. <strong>Documentation Links:</strong> Provide direct links to relevant sections of the Vercel and Next.js documentation to save time for the reader. This can help them quickly find the information.
              <br />
              <br />
              2. <strong>Business Case Studies:</strong> Incorporate real-world examples or case studies of how Vercel and Next.js have been used to solve specific business challenges or improve customer experiences. This can help the reader understand the practical applications of the technologies and make the exercise more engaging and relevant
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <a
                href="/question/7"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  &lt;- Previous
                </h2>
              </a>
              <a
                href="/question"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
                target="_self"
                rel="noopener noreferrer"
              >
                <h2 className='mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400'>
                  Next -&gt;
                </h2>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/"
                className="mt-8 group rounded-lg border border-transparent px-5 py-4 text-xl transition-colors hover:border-gray-400"
                target="_self"
                rel="noopener noreferrer"
              >
                &lt;- Back to Home
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
