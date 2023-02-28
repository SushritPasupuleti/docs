import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Main from '@site/src/components/HomepageFeatures/main';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="https://sushritpasupuleti.github.io/">
						{`Check out my Portfolio/Resume 👨‍💻`}
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Hey there, it's Sushrit, a technical and business-focused solo entrepreneur who has been building, managing, and scaling products for 7 years now. I’m quick to learn, adapt, innovate, and get scrappy when needed to ensure the product and I evolve as we should. This site will house all my documentation going forward.">
			<HomepageHeader />
			{/*
			*/}
			<main>
				<HomepageFeatures />
				<hr />
				<br />
				<section style={{
					marginBottom: '5rem',
				}}>
					<div className="container">
						<h1>{`Let's get started`}</h1>
						<p className="hero__subtitle">{`Feel free to open a PR if you would like to correct or add to anything here :)`}</p>
						<div className={styles.buttons}>
							<Link
								className="button button--secondary button--lg"
								to="/docs/intro">
								{`Start Browsing`}
							</Link>
						</div>
					</div>
				</section>
				<br />
			</main>
		</Layout>
	);
}
