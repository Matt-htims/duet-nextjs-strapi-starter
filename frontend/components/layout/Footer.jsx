'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CgWebsite } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';
import {
	AiFillTwitterCircle,
	AiFillYoutube,
	AiFillInstagram,
} from 'react-icons/ai';

import Logo from '../atoms/Logo';

function FooterLink({ url, text }) {
	const path = usePathname();

	return (
		<li className="flex">
			<Link
				href={url}
				className={`hover:text-red-400 ${path === url && 'text-red-400'}}`}
			>
				{text}
			</Link>
		</li>
	);
}

function RenderSocialIcon({ social }) {
	switch (social) {
		case 'WEBSITE':
			return <CgWebsite />;
		case 'TWITTER':
			return <AiFillTwitterCircle />;
		case 'YOUTUBE':
			return <AiFillYoutube />;
		case 'DISCORD':
			return <FaDiscord />;
		case 'INSTAGRAM':
			return <AiFillInstagram />;
		default:
			return null;
	}
}

export default function Footer({
	logoUrl,
	logoText,
	menuLinks,
	legalLinks,
	socialLinks,
}) {
	return (
		<footer className="py-6 bg-gray">
			<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-600 md:space-y-12 divide-opacity-50">
				<div className="grid grid-cols-12">
					<div className="pb-6 col-span-full md:pb-0 md:col-span-9">
						<Logo src={logoUrl}>
							{logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
						</Logo>
					</div>

					<div className="col-span-6 text-center md:text-left md:col-span-3">
						<p className="pb-1 text-lg font-medium">Menu</p>
						<ul>
							{menuLinks.map((link) => (
								<FooterLink key={link.id} {...link} />
							))}
						</ul>
					</div>
				</div>
				<div className="grid justify-center pt-6 lg:justify-between">
					<div className="flex">
						<span className="mr-2">
							©{new Date().getFullYear()} All rights reserved
						</span>
						<ul className="flex">
							{legalLinks.map((link) => (
								<Link
									href={link.url}
									className="text-gray-400 hover:text-gray-300 mr-2"
									key={link.id}
								>
									{link.text}
								</Link>
							))}
						</ul>
					</div>
					<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
						{socialLinks.map((link) => (
							<a
								key={link.id}
								rel="noopener noreferrer"
								href={link.url}
								title={link.text}
								target={link.newTab ? '_blank' : '_self'}
								className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black"
							>
								<RenderSocialIcon social={link.social} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
