"use client";
import styles from './MiddleHomePage.module.css';
import Story, { StoryProps } from './story';

const Stories: React.FC = () => {
  // Simulated API data
  const simulatedData: StoryProps[] = [
    { 
      img_profile: '/Assets/itsdougthepug.jfif', 
      name_utilisateur: 'itsdougthepug', 
      visited: false 
    },
    { 
      img_profile: '/Assets/openaidalle.jfif', 
      name_utilisateur: 'openaidalle', 
      visited: false
    },
    { 
      img_profile: '/Assets/mkbhd.jfif', 
      name_utilisateur: 'mkbhd', 
      visited: false 
    },
    { 
      img_profile: '/Assets/wahab.xyz.jfif', 
      name_utilisateur: 'wahab.xyz', 
      visited: true
    },
    { 
      img_profile: '/Assets/lewishamilton.jfif', 
      name_utilisateur: 'lewishamilton', 
      visited: false 
    },
    { 
      img_profile: '/Assets/defavours.jfif', 
      name_utilisateur: 'defavours', 
      visited: true
    }
  ];

  return (
    <>
    <div className={styles.stories_container}>
      <div className={styles.stories_row}>
        {simulatedData.map((user, index) => (
          <Story
            key={index}
            img_profile={user.img_profile}
            name_utilisateur={user.name_utilisateur}
            visited={user.visited}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Stories;
