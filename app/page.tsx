'use client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from 'next/link';


interface CountProps {

}

interface CountState {
  count: number
}

interface UserPreviewProps {
    firstname: string;
    lastname: string;
}

interface UserPreviewState {
    fullname: string;
}

interface SubmitButtonProps {
	child: string;
	styles: CSSProperties | undefined;
}

interface ShouldUpdateProps {
	num: number;
}

interface SnapshotList {
	list: any[];
}

interface Clock {
	date: Date;
}

import React, { CSSProperties } from 'react';
import ReactDOM from "react-dom";

function MyComponent() {
	return (
	  <div>
		<ul>
			<li>
				<Link href="/about">
					About Page
				</Link>
			</li>
			<li>
				<Link href="/products">
					Products Page
				</Link>
			</li>
			<li>
				<Link href="/useEffectExample">
					User Effect Page
				</Link>
			</li>
			<li>
				<Link href="/propsParentComponent">
					Props page
				</Link>
			</li>
			<li>
				<Link href="/2">
					Dynamic routing with props
				</Link>
			</li>
			<li>
				<Link href="/apiRoutingWithProps">
					API routing with props
				</Link>
			</li>
			<li>
				<Link href="/api/hello2">
					API routing with props 2
				</Link>
			</li>
			<li>
				<Link href="/helloPage">
					Hello page
				</Link>
			</li>
			<li>
				<Link href="/post">
					Post 
				</Link>
			</li>
			<li>
				<Link href="/test/starList">
					star list 
				</Link>
			</li>
		</ul>
	  </div>
	);
}

export default MyComponent;