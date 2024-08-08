import Link from 'next/link';

// const response = await fetch('http://localhost:3000/api/route', { method: 'POST', body: JSON.stringify({body: 'test'})});
// const users = await response.json();
// console.log('response: ', users);

function ApiRoutingWithProps(props) {
    return (
        <div>
            {/* <p>{users}</p> */}
            <p>
                <Link href="/">
                    Homepage
                </Link>
            </p>
        </div>
    );
}

export default ApiRoutingWithProps;
