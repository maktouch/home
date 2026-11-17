import Head from "next/head";

function Clause({ title, children }) {
	return (
		<p className="mt-4 text-gray-500">
			<span className="font-medium text-gray-900">{title}</span> {children}
		</p>
	);
}

export default function CurziPrivacy() {
	return (
		<div className="py-10 lg:px-52 md:px-32 sm:px-16 text-gray-900">
			<Head>
				<title>Curzi privacy policy</title>
				<meta
					name="description"
					content="Curzi collects nothing: no account, no analytics, no advertising and no tracking."
				/>
			</Head>

			<h1 className="text-xl">Curzi privacy policy</h1>
			<p className="mt-1 text-sm text-gray-500">
				Last updated: 16 November 2026
			</p>

			<p className="mt-6 text-gray-500">
				Curzi is a currency converter with growth, withdrawal and mortgage
				calculators, made by Makara Sok (GestionMaktouch).
			</p>

			<Clause title="What Curzi collects: nothing.">
				The app has no account, no analytics, no advertising and no tracking. It
				does not collect, store or share personal information.
			</Clause>

			<Clause title="What stays on your device.">
				Your list of currencies, the amounts and settings you enter, and the
				scenarios you save are kept on your device only. Deleting the app
				deletes them.
			</Clause>

			<Clause title="Network use.">
				To convert currencies, Curzi downloads exchange rates from the Exchange
				Rate API (
				<a
					href="https://www.exchangerate-api.com"
					className="underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					exchangerate-api.com
				</a>
				). That request carries no personal data and no identifier. The last
				rates are cached on your device so the app works offline.
			</Clause>

			<Clause title="Purchases.">
				The optional “Support Curzi” purchase is handled by Apple’s App Store or
				Google Play. Curzi never sees your payment details; it only learns
				whether the purchase was made.
			</Clause>

			<Clause title="Children.">
				Curzi is not directed at children and collects no data from anyone.
			</Clause>

			<Clause title="Changes.">
				If this policy changes, the new version is published at the same address
				with a new date.
			</Clause>

			<Clause title="Contact.">
				<a href="mailto:me@maktouch.com" className="underline">
					me@maktouch.com
				</a>
			</Clause>
		</div>
	);
}
