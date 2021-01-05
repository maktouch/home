import Head from "next/head";

const Anchor = () => (
  <svg
    className="inline w-4 h-4 "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

function Section({ title, children }) {
  return (
    <div className="my-8">
      <h2 className="text-base">{title}</h2>
      {children}
    </div>
  );
}

function Text({ children }) {
  return <p className="text-gray-500">{children}</p>;
}

function Timeline({ children }) {
  return (
    <div className="flow-root mt-5 ">
      <ul className="-mb-8">{children}</ul>
    </div>
  );
}

function Logo({ logo, title }) {
  return (
    <>
      {typeof logo === "string" && (
        <img
          className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center"
          src={logo}
          alt={title}
        />
      )}

      {typeof logo !== "string" && logo}

      <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px" />
    </>
  );
}

function TimelineItem({
  href = null,
  logo,
  title,
  subtitle = null,
  children = null,
  last = false,
}) {
  return (
    <li>
      <div className="relative pb-8">
        {!last && (
          <span
            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start space-x-3">
          {href && (
            <a href={href} className="relative" target="_blank">
              <Logo logo={logo} title={title} />
            </a>
          )}

          {!href && <Logo logo={logo} title={title} />}

          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                {href && (
                  <a
                    href={href}
                    className="font-medium text-gray-900"
                    target="_blank"
                  >
                    {title} <Anchor />
                  </a>
                )}

                {!href && (
                  <span className="font-medium text-gray-900">{title}</span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">{children}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

function Item({ logo, href, title }) {
  return (
    <li>
      <div className="relative pb-4">
        <div className="relative flex items-start space-x-3">
          {href && (
            <a href={href} className="relative" target="_blank">
              <Logo logo={logo} title={title} />
            </a>
          )}

          {!href && <Logo logo={logo} title={title} />}

          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                {href && (
                  <a
                    href={href}
                    className="font-medium text-gray-900"
                    target="_blank"
                  >
                    {title}
                  </a>
                )}

                {!href && (
                  <span className="font-medium text-gray-900">{title}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div className="pt-10 lg:px-52 md:px-32 sm:px-16 text-gray-900">
      <Head>
        <title>My name is Mak</title>
      </Head>
      <div className="flex">
        <div className="mr-4 flex-shrink-0 self-center">
          <img src="/avatar.gif" className="h-24 w-24 " />
        </div>
        <div className="self-center">
          <h1 className="text-xl">Makara Sok</h1>
          <p className="mt-1 text-gray-500 text-sm">
            Technical Co-Founder, Software Architect, Product Manager, Ops
            Engineer, Full Stack Developer in Montreal, Canada
          </p>
        </div>
      </div>
      <Section title="About">
        <Text>
          Hi 👋🏻 I'm Mak. People and companies usually hire me when they have a
          project that they need implemented fast and well. I have over 15 years
          of experience in tech and 3 succesful startups under my belt. I'll
          basically build your idea and let the market validate it, and if it
          all goes well, I'll help you build your team.
        </Text>
      </Section>

      <Section title="Work Experience">
        <Timeline>
          <TimelineItem
            href="https://getwiser.com"
            logo="/getwiser.svg"
            title="Wiser"
            subtitle="2020 - 2021 @ Montreal, Canada"
          >
            Technical Co-Founder, Architect
          </TimelineItem>

          <TimelineItem
            href="https://splitmedialabs.com"
            logo="/sml.svg"
            title="SplitmediaLabs"
            subtitle="2017 - 2021 @ Metro Manila, Philippines"
          >
            <p className="mb-3">VP of Software Engineering, Architect</p>
            <ul className="list-disc text-sm text-gray-500">
              <li>
                Responsible of everything web/server/cloud related, and
                implementation of modern standards and security practices
              </li>
              <li>
                Implemented the DevOps philosophy between all the teams in the
                company
              </li>
              <li>Awarded over 50k USD of bug bounties via HackerOne</li>
              <li>
                Migrated from AWS to GCP without downtime, and reducing the
                monthly bill by more than 50%
              </li>
              <li>
                Migrated from a monolithic PHP app to a more modern, secure and
                fast multi-services backend
              </li>
              <li>
                Increased the number of deployments per week from 1 to an
                average of 12
              </li>
              <li>
                Made frontend iterations 5x faster by implementing modern
                frameworks and practices
              </li>
              <li>
                Implemented the pipeline to automatically translate our apps in
                9 languages
              </li>
              <li>
                Created and led the data science team, involving every teams to
                push data to BigQuery for KPIs
              </li>
              <li>
                Decreased the onboarding time of a new hire from 1 week to 1 day
              </li>
              <li>Increased yearly revenue using data-driven decisions</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            href="https://player.me"
            logo="/player.png"
            title="Player.me"
            subtitle="2013 - 2017 @ Koh Samui, Thailand & Metro Manila, Philippines"
          >
            <p className="mb-3">CTO, Technical Co-Founder, Architect</p>
            <ul className="list-disc text-sm text-gray-500">
              <li>Created a social network from scratch </li>
              <li>Grew it to 2M+ users</li>
              <li>Got acquired by Splitmedialabs Ltd. </li>
              <li>Scaled the team from 1 to 30</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            logo={
              <svg
                className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Various Tech Companies"
            subtitle="2006 - 2014 @ Canada"
            last
          >
            Freelancer, Frontend Dev, Backend Dev, Technical Advisor
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title="Latest Projects">
        <Timeline>
          <TimelineItem
            href="https://getwiser.com"
            logo="/getwiser.svg"
            title="getwiser.com"
            subtitle="2020 - 2021"
          >
            Web app for the Medical CPD industry. <br />
            Technology: HLS Video Streaming, RTMP Live Stream, React, NextJS,
            NodeJS GraphQL, Postgres, Redis, Docker, Kubernetes, Vercel,
            Cloudflare, Google Cloud, AWS, Stripe
          </TimelineItem>

          <TimelineItem
            href="https://www.xsplit.com/connect-webcam"
            logo="/xsplit-webcam.svg"
            title="XSplit Connect: Webcam"
            subtitle="2020"
          >
            Mobile companion app for XSplit VCam, allows you to use your phone's
            camera as a webcam. <br />
            Responsibilities: API, Project Manager
            <br />
            Technology: NodeJS, MySQL, Android Java/Kotlin, Objective-C/Swift
          </TimelineItem>

          <TimelineItem
            href="https://www.xsplit.com"
            logo="/xsplit.png"
            title="xsplit.com"
            subtitle="2017 - 2020"
          >
            Main website and API for XSplit. Averages 1M+ Monthly Uniques
            Visitor, 9M+ page views per day. <br />
            Technology: React, NodeJS, Kubernetes, Docker, Google Cloud, Vault,
            BigQuery, MySQL, Helm, Redis, Google Cloud Pubsub
          </TimelineItem>

          <TimelineItem
            href="https://www.xsplit.com/vcam"
            logo="/vcam.svg"
            title="XSplit VCam"
            subtitle="2018 - 2019"
          >
            The most performant virtual green screen on the market. <br />
            Responsibilities: API, Machine Learning Pipeline <br />
            Technology: React, NodeJS, MySQL, Kubernetes, Google Cloud
          </TimelineItem>

          <TimelineItem
            href="https://player.me"
            logo="/player.png"
            title="player.me"
            subtitle="2013 - 2017"
            last
          >
            A social network for Gamers. Backend is inspired by Facebook (Graph
            Database, GraphQL). Also includes a CEF-based Desktop App. <br />
            Technology: PHP, Laravel, React, NodeJS, MySQL, Redis, GraphQL,
            Docker, Kubernetes, Google Cloud
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title="Side Projects / Open Source">
        <Timeline>
          <TimelineItem
            href="https://github.com/SplitmediaLabsLimited/devctl"
            logo="/sml-ops.png"
            title="devctl"
            subtitle="2019 - 2021"
          >
            Easily start developing in monorepos with docker-compose
          </TimelineItem>

          <TimelineItem
            href="https://myntplayer-v2.maktouch.com/"
            logo={
              <svg
                className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            }
            title="MyntPlayer"
            subtitle="2013 - 2021"
          >
            Crowdsourced Music Player for bars powered by Youtube made for Mynt
            Bar in Thailand. This is my go-to project whenever I need to explore
            a new frontend framework.{" "}
            <a
              className="text-gray-500 underline"
              href="https://github.com/maktouch/MyntPlayer"
              target="_blank"
            >
              Github Link
            </a>
          </TimelineItem>

          <TimelineItem
            href="https://github.com/SplitmediaLabsLimited/supermigration"
            logo="/sml-ops.png"
            title="supermigration"
            subtitle="2019 - 2020"
          >
            Easily perform table migrations in BigQuery
          </TimelineItem>

          <TimelineItem
            href="https://github.com/SplitmediaLabsLimited/pubsub-queue"
            logo="/sml-ops.png"
            title="pubsub-queue"
            subtitle="2019 - 2020"
          >
            A Google Cloud Pubsub client for node.js geared towards queues and
            jobs. Inspired by ceejbot/fivebeans
          </TimelineItem>

          <TimelineItem
            href="https://github.com/SplitmediaLabsLimited/vault-tpl"
            logo="/sml-ops.png"
            title="vault-tpl"
            subtitle="2019"
            last
          >
            vault-tpl is a CLI application that replaces some tokens with
            secrets from Vault. You can use it to store secrets inside your
            repository and have them decrypted for development, for deployment
            or for any other reasons.
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title="Contact">
        <Timeline>
          <Item
            href="mailto:makara.aktee.sok@gmail.com"
            logo={
              <svg
                className="h-6 w-6 flex items-center justify-center text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
            title="makara.aktee.sok@gmail.com"
          />
          <Item
            href="https://www.linkedin.com/in/makara-sok/"
            logo={
              <svg
                className="h-6 w-6 flex items-center justify-center"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 382 382"
              >
                <path
                  d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                  fill="#0077b7"
                />
              </svg>
            }
            title="makara-sok"
          />

          <Item
            href="https://github.com/maktouch"
            logo={
              <svg
                className="h-6 w-6 flex items-center justify-center"
                height={512}
                viewBox="0 0 24 24"
                width={512}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
                  fill="#212121"
                />
              </svg>
            }
            title="maktouch"
          />

          <Item
            href="https://twitter.com/maktouch"
            logo={
              <svg
                className="h-6 w-6 flex items-center justify-center"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  fill="#03a9f4"
                />
              </svg>
            }
            title="maktouch"
          />
        </Timeline>
      </Section>
    </div>
  );
}
