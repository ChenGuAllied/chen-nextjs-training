import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function UseEffectPage() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>
          <Link href="/">
            Homepage
          </Link>
        </p>
      </div>
    );
}

export default UseEffectPage;