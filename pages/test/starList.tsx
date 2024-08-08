import stars from "../../backendData/some-backend-data.json";
import Link from "next/link";
import { starInterface } from "./[something]";

export default function starList() {
    const starData = JSON.parse(JSON.stringify(stars, null, 2));
    return (
        <main>
            {starData.stars.map((star: starInterface) => (
                <p key={star.id}>
                    <Link key={star.id} href={`/test/${star.id}`}>
                        {star.name}
                    </Link>
                </p>
            ))}
        </main>
    )
}

// export default function starList() {
//     return (
//         <Link href="/test/[something]" as="/test/St2-18">
//             St2-18
//         </Link>
//     );
// }