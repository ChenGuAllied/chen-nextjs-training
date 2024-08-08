import { useRouter } from 'next/router';
import Link from 'next/link';

function Post(props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>{ handler({body: 'test'}, {})}</p>
      <p>
        <Link href="/">
            Homepage
        </Link>
      </p>
    </div>
  );
}

export default Post;