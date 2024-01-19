import Head from "next/head";
import GitHubCalendar from "react-github-calendar";
import { Item, Section, Text, Timeline, TimelineItem } from "../components";
import { BookMeeting } from "@/components/BookMeeting";

const currentYear = new Date().getFullYear();
const github = (
  <svg
    height="32"
    viewBox="0 0 16 16"
    version="1.1"
    width="32"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

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
            Engineer, Full Stack Developer, Principal Software Engineer in
            Montreal, Canada
          </p>
        </div>
      </div>
      <Section title="About">
        <Text>
          Hi 👋🏻 I'm Mak. People and companies usually hire me when they have a
          project that they need implemented fast and well. I have over{" "}
          {currentYear - 2006} years of experience in tech and 3 succesful
          startups under my belt. I'll basically build your idea and let the
          market validate it, and if it all goes well, I'll help you build your
          team. If you already have something, I can come in and help make your
          processes more efficient.
        </Text>
        <Text>
          <BookMeeting />
        </Text>
      </Section>

      <Section title="This year's code contributions">
        <GitHubCalendar username="maktouch" style={{ marginTop: "1.5rem" }} />
      </Section>

      <Section title="Latest Commercial Projects & Contracts">
        <Timeline>
          <TimelineItem
            href="https://founderpath.com"
            logo="/founderpath.svg"
            title="Founderpath"
            subtitle="2022 - 2023"
          >
            <p className="mb-3">
              Startup that helps Bootstrapped SaaS get capital
            </p>
            <p className="mb-3">
              Technology: Laravel, React, MySQL, Redis, Docker, Kubernetes,
              DigitalOcean, tRPC, BigQuery, Metabase, Airflow
            </p>
            <ul className="list-disc text-sm text-gray-500">
              <li>Migrated from Laravel Forge to Docker + Kubernetes</li>
              <li>Implemented a real CI/CD with reproducible builds</li>
              <li>Implemented a proper secrets / config management system</li>
              <li>Implemented proper logging system</li>
              <li>Improve onboarding of new devs</li>
              <li>Implemented pipeline to BigQuery</li>
              <li>Implemented data querying dashboards</li>
              <li>Revamped Airflow infrastructure and DX</li>
              <li>Create a Google Workspace add-on</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            href="https://creatorcart.com"
            logo="/creatorcart.svg"
            title="CreatorCart"
            subtitle="2022 - 2023"
          >
            <p className="mb-3">
              Micro-shops to connect Shops with Creators and drive it with SMS
              Campaigns
            </p>
            <p className="mb-3">
              Technology: React, NextJS, NodeJS (Typescript), GraphQL,
              PostgresQL, Redis, Docker, Kubernetes, Cloudflare, Google Cloud,
              Temporal.io, Twilio, Shopify, SalesForce CommerceCloud (SFCC),
              Retool
            </p>
            <ul className="list-disc text-sm text-gray-500">
              <li>Built the MVP from scratch mostly alone</li>
              <li>
                Onboarded the first clients, and tested the product-market-fit
              </li>
              <li>Interviewed and hired engineers</li>
              <li>Built a Shopify Storefront App and got approved</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            href="https://videocom.com"
            logo="/videocom.svg"
            title="VideoCom"
            subtitle="2022 - 2023"
          >
            <p className="mb-3">
              Apps and platform to level up your communication. Previously
              called XSplit Cloud
            </p>
            <p className="mb-3">
              Technology: ffmpeg, React, NextJS, NodeJS (Typescript), GraphQL,
              MySQL, Redis, Docker, Kubernetes, Cloudflare, Google Cloud
            </p>
          </TimelineItem>
          <TimelineItem
            href="https://cloud.xsplit.com"
            logo="/xsplit-cloud.svg"
            title="XSplit Cloud"
            subtitle="2021"
            dead
          >
            Cloud drive for XSplit products <br />
            Technology: ffmpeg, React, NextJS, NodeJS (Typescript), GraphQL,
            MySQL, Redis, Docker, Kubernetes, Cloudflare, Google Cloud
          </TimelineItem>
          <TimelineItem
            href="https://getwiser.com"
            logo="/getwiser.svg"
            title="getwiser.com"
            subtitle="2020 - 2021"
            dead
          >
            Web app for the Medical CPD industry (no longer active) <br />
            Technology: HLS Video Streaming, RTMP Live Stream, React, NextJS,
            NodeJS (typescript), GraphQL, Postgres, Redis, Docker, Kubernetes,
            Vercel, Cloudflare, Google Cloud, AWS, Stripe. <br />
            Wiser has unfortunately been dissolved.
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
            // href="#"
            logo="/mailtorch.jpeg"
            title="MailTorch"
            subtitle="2018"
            dead
          >
            Self hosted email distribution platform. <br />
            MailTorch has unfortunately been dissolved.
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
            dead
          >
            A social network for Gamers. Backend is inspired by Facebook (Graph
            Database, GraphQL). Also includes a CEF-based Desktop App. <br />
            Technology: PHP, Laravel, React, NodeJS, MySQL, Redis, GraphQL,
            Docker, Kubernetes, Google Cloud <br />
            Player has unfortunately been dissolved.
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title="Work Experience">
        <Timeline>
          <TimelineItem
            href="https://maktouch.com"
            logo="/maktouch.svg"
            title="Consultation Maktouch Inc."
            subtitle={`2022 - ${currentYear} @ Montreal, Canada`}
          >
            <p className="mb-3">Principal Engineer for hire</p>
          </TimelineItem>

          <TimelineItem
            href="https://videocom.com"
            logo="/videocom.svg"
            title="Videocom"
            subtitle={`2022 - ${currentYear} @ Montreal, Canada`}
          >
            <p className="mb-3">Head of Cloud Services, Architect</p>
            <ul className="list-disc text-sm text-gray-500">
              <li>Rebrand and separation from XSplit Cloud</li>
              <li>Migrations of services such as the CI/CD</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            href="https://livescale.tv"
            logo="/livescale.svg"
            title="Livescale"
            subtitle={`2021 - 2022 @ Montreal, Canada`}
          >
            <p className="mb-3">Principal Engineer, Architect</p>
            <ul className="list-disc text-sm text-gray-500">
              <li>
                Decreased the onboarding time of a new hire from 3 weeks to 2
                days
              </li>
              <li>Implemented a 100% Typescript culture</li>
              <li>Overhauled CI/CD to be faster and easier to change</li>
              <li>Migration from an ExpressJS backend to GraphQL</li>
              <li>
                Architecture for new ecommerce backends to be plugged in an
                standard way
              </li>
            </ul>
          </TimelineItem>

          <TimelineItem
            href="https://splitmedialabs.com"
            logo="/sml.svg"
            title="SplitmediaLabs / XSplit"
            subtitle={`2017 - 2022 @ Metro Manila, Philippines & Montreal, Canada`}
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
            dead
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
            Freelancer, Frontend Dev, Backend Dev, Technical Advisor. In my
            early days, I did a lot of contracts for a lot of clients. Mostly
            simple frontend / ops work. A lot of wordpress, static sites,
            e-commerces.
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title="Side Projects / Open Source">
        <Timeline>
          <TimelineItem
            href="https://github.com/maktouch/kysely-bigquery"
            logo={github}
            title="Kysely BigQuery Dialect"
            subtitle="2024"
          >
            Query BigQuery from Kysely
          </TimelineItem>
          
          <TimelineItem
              href="https://github.com/maktouch/kysely-zod-codegen"
              logo={github}
              title="Kysely Zod Codegen"
              subtitle="2023-2024"
            >
            Generate zod types from your database, for complete type safety with Kysely
          </TimelineItem>
          <TimelineItem
            href="https://github.com/founderpathcom/finance.ts"
            logo={github}
            title="Finance.ts"
            subtitle="2023"
          >
            Finance.ts makes it easy to incorporate common financial calculations into your application
          </TimelineItem>
          <TimelineItem
            href="https://github.com/maktouch/slack-chatgpt"
            logo={github}
            title="Slack ChatGPT"
            subtitle="2023"
          >
            This little project is to run your own OpenAI assistant right in
            your Slack.
          </TimelineItem>
          <TimelineItem
            href="https://github.com/maktouch/namespace-cleaner"
            logo={github}
            title="Namespace Cleaner"
            subtitle="2023"
          >
            Prunes Kubernetes namespaces based on a repo's Github PR
          </TimelineItem>
          <TimelineItem
            href="https://github.com/maktouch/docker-ssh-tunnel"
            logo={github}
            title="Docker SSH Tunnel"
            subtitle="2023"
          >
            This container is useful if you want to provide easy tunneling to
            some servers
          </TimelineItem>
          <TimelineItem
            href="https://makaraoke.ca"
            logo="/makaraoke.png"
            title="makaraoke.ca"
            subtitle="2023"
          >
            Awesome Karaoke at home. A small rewrite of MyntPlayer with karaoke
            in mind.
          </TimelineItem>
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
            href="mailto:me@maktouch.com"
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
            title="me@maktouch.com"
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
