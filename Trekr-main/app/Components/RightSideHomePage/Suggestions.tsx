"use client"
import styles from "./RightSideHomePage.module.css"
import UserSuggest from "./UserSuggest";
interface User {
  image_profile_user: string;
  username: string;
  description: string;
}

const mockUsers: User[] = [
  {
    image_profile_user: "/Assets/defavours.jfif",
    username: "user1",
    description: "This is user 1",
  },
  {
    image_profile_user: "/Assets/itsdougthepug.jfif",
    username: "user2",
    description: "This is user 2",
  },
  {
    image_profile_user: "/Assets/mkbhd.jfif",
    username: "user3",
    description: "This is user 3",
  },
  {
    image_profile_user: "/Assets/lewishamilton.jfif",
    username: "user4",
    description: "This is user 4",
  },
];

const Suggestions = () => {
  return (
    <div className={styles.suggestions_container}>
      <div className={styles.title}>
        <p>Des suggestions pour vous</p>
      </div>
      <div className={styles.users_suggestions}>
        {mockUsers.map((user, index) => (
          <UserSuggest
            key={index}
            image_profile_user={user.image_profile_user}
            username={user.username}
            description={user.description}
          />
        ))}
      </div>
    </div>
  );
};
 
export default Suggestions;