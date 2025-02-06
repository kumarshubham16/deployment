
import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findMany({
    select: {
      username: true,
      password: true,
    },
  });

  return (
    <div>
      <h1>User Credentials</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Username: {user.username}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
