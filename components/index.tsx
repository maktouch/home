import { clsx } from "clsx";

export const Anchor = () => (
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

export function Section({ title, children }) {
  return (
    <div className="my-8">
      <h2 className="text-base">{title}</h2>
      {children}
    </div>
  );
}

export function Text({ children }) {
  return <p className="text-gray-500">{children}</p>;
}

export function Timeline({ children }) {
  return (
    <div className="flow-root mt-5 ">
      <ul className="-mb-8">{children}</ul>
    </div>
  );
}

export function Logo({ logo, title }) {
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

export function TimelineItem({
  href = null,
  logo,
  title,
  subtitle = null,
  children = null,
  last = false,
  dead = false,
}) {
  return (
    <li className={clsx({ "opacity-30": dead })}>
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

export function Item({ logo, href, title }) {
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
