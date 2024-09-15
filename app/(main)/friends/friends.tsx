import { friendsCard } from '~/app/(main)/friends/FriendsCard'
import { getSettings } from '~/sanity/queries'

export async function friends() {
  const friends = (await getSettings())?.friends || []

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {friends.map((friends) => (
        <FriendsCard friends={friend} key={friend._id} />
      ))}
    </ul>
  )
}
