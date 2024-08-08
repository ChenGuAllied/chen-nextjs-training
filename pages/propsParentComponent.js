import ChildComponent from "./propsChildComponent";
import Link from 'next/link';

function ParentComponent() {
  const data = "Hello from Parent";
  return (
    <div>
      <ChildComponent message={data} />
      <p>
        <Link href="/">
					Homepage
				</Link>
      </p>
    </div>
  );
}

export default ParentComponent;