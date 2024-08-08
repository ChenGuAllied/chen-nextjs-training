import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <p>paragraph 1</p>
      <p>
        <Link href="/">
					Homepage
				</Link>
      </p>
    </div>
  );
};

export default AboutPage;