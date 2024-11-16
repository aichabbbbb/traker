import { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from './Feed';
import styles from './MiddleHomePage.module.css';
import UserSuggestions from './UserSuggestions';
import baseURL from "../../utils/baseUrl"
import LoadingDots from '../LoadingDots/LoadingDots';

const FeedPage = () => {

  const dummyData = [
    {
      id: 1,
      content: 'Visited the amazing Abu Simbel!',
      createdAt: '2024-08-08T14:23:13.824Z',
      mediaUrls: [
        { id: 1, type: 'image', url: 'https://s3-alpha-sig.figma.com/img/020a/e43f/1d0eba11a5d3db0cdc8fc142c77fd31f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfEhk44Ie8oXq9EFIrjxjob9HWz0x1MKQSxqcTn2-vQtmMQCkP4xbp0UdAWScZ7YzaWURyJu4WwtAuvf5KEmD0j~5GtlIF8rfN-JRJ1kUMEu87CAqFQydj2~c-pKNJszfyIFUJ0psK7Tz4tOtDK9GTL-cUy1qYau0lRRjg4ypKHOZA9BV4-EIaFdB1g7oK~cbgkpVTWNjHEe2-wYDpTNg9zRPY3TBtPr3gd0PMA0cQSUZBPH9u1bBUMLnTCTLUYHR0yV4lrsrMZEEsv~exbiQgoWtJQtpcJQFr8qWbeHnSCm8ZiNLEKo2gnyK-4x2eUxJzOhL2J7GQ4XaAXcv0hkrA__' },
        { id: 2, type: 'image', url: 'https://s3-alpha-sig.figma.com/img/af6d/15cc/62da94e29d4dce2fa915c9fa7f4c78de?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Upt3JMmgXmiuxXEJuu1gXqGbnVN8rRjj4KWdLIJfNCKtYAgDmNHw1OT5RJ8tsloeMTlzwmz-r2BfYaORGFlVmyhexgC06TWOXrJmEX3uil5P2T6fhV7Z6WU7piyPlvAiZlKoIa3lHzeMwbu8VRxs3DuD1ChaLOGNgB~BO9GCARYaGLDoBcCaWQISkwWYc7bgePCYda0UQ9ImNkuHZOhdxRD~FJoOq7lrCMBXLO08L5PEJh4Q2z3FWSaNEPqe70V0pP96rBkK6OiIDdsGhferLqqNPmypD9w~JCCHnmxNxoqp2EyUzoMdEEvqc7svSb0ffMqox0NqYlD0xfMAD7VOBg__' },
        { id: 3, type: 'image', url: 'https://s3-alpha-sig.figma.com/img/e86a/dec8/1c4d5f1be6991429a8bdae340c81fff4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRnwm3YE~Wj1OnXjiNbBKvwbCxqsIX0bjj9nmxGLa1gued-~BHMhJB8jVPXyf8uiKV6YTpF1qIdeQd3BlIACO7JeVJib9w5jQ3hYJCp1-ot3pH9C8hBzbEXk9xap6xoEb4Bb4BBAa6tu9d7kzN9OiqWJ7Zc8biOH6r~DB22w1bHeZp2AiK5lrOQ1kuy7pG95YCqAgS7ik3n5Q9tlZjBPy5~gKCw~AE3KRMpyonddVO8x5ErvzB0PIHR9JGUb3eBXp3ZmsLnos4-FPglFvNZDvJoghRmjs0-8Ia0u5QnTUn2ovwUBfz-tIhMR2eI11e8JKmxDDeA~5vbxebbtOfjH0Q__' },
      ],
      user: {
        username: 'Clara Fontaine',
        avatarUrl: 'https://s3-alpha-sig.figma.com/img/f1b5/c2ab/85fb415ef4f507a1bd1747f7c90a4447?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=anJRroReIIqnPiBkyxkB7JA7G3zgdx4vptVAMqf83bKNUpeH0S0tKQqu-uwZYAenorHyCgGukzNW2CIrlYXU0x6Lvl5wGuoYftS1pnivfDiz9hHj6EuR6tZR-HPayDpnWTzyh-PkV4OwLoeiKofA1k1hmWUpXN8ndMMVrbTc~B6SquzW3n26FRxdeFeU0sd0GVEI5k7SlceuoDVIHFEKUDNeWR4hfWYAByKWBq~Yje8Bzwj-ZJHwKI2PR-n5X5UGVsjD2Mcff6ygUMpzb3BrLtJ27oCZXoc-V9w7GIhDeWudZe0yeYO2As6Wyt7Bxc6sPTZvN3n8Y2waYVSm4tXhqw__'
      }
    },
    {
      id: 2,
      content: 'Beautiful views of Santorini!',
      createdAt: '2024-08-08T10:12:45.123Z',
      mediaUrls: [
        { id: 2, type: 'image', url: 'https://s3-alpha-sig.figma.com/img/af6d/15cc/62da94e29d4dce2fa915c9fa7f4c78de?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Upt3JMmgXmiuxXEJuu1gXqGbnVN8rRjj4KWdLIJfNCKtYAgDmNHw1OT5RJ8tsloeMTlzwmz-r2BfYaORGFlVmyhexgC06TWOXrJmEX3uil5P2T6fhV7Z6WU7piyPlvAiZlKoIa3lHzeMwbu8VRxs3DuD1ChaLOGNgB~BO9GCARYaGLDoBcCaWQISkwWYc7bgePCYda0UQ9ImNkuHZOhdxRD~FJoOq7lrCMBXLO08L5PEJh4Q2z3FWSaNEPqe70V0pP96rBkK6OiIDdsGhferLqqNPmypD9w~JCCHnmxNxoqp2EyUzoMdEEvqc7svSb0ffMqox0NqYlD0xfMAD7VOBg__' },
        { id: 1, type: 'image', url: 'https://s3-alpha-sig.figma.com/img/020a/e43f/1d0eba11a5d3db0cdc8fc142c77fd31f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfEhk44Ie8oXq9EFIrjxjob9HWz0x1MKQSxqcTn2-vQtmMQCkP4xbp0UdAWScZ7YzaWURyJu4WwtAuvf5KEmD0j~5GtlIF8rfN-JRJ1kUMEu87CAqFQydj2~c-pKNJszfyIFUJ0psK7Tz4tOtDK9GTL-cUy1qYau0lRRjg4ypKHOZA9BV4-EIaFdB1g7oK~cbgkpVTWNjHEe2-wYDpTNg9zRPY3TBtPr3gd0PMA0cQSUZBPH9u1bBUMLnTCTLUYHR0yV4lrsrMZEEsv~exbiQgoWtJQtpcJQFr8qWbeHnSCm8ZiNLEKo2gnyK-4x2eUxJzOhL2J7GQ4XaAXcv0hkrA__' },
      ],
      user: {
        username: 'Aurélien Dupuis',
        avatarUrl: 'https://s3-alpha-sig.figma.com/img/02dc/b37b/e364369c1425aa22414540a765f104d7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2XYg8hshbSbhWOzIl1I6MbctzrAWiahGBN~vsaCiffAOhSK5B~1ZwqtXKxnPP97HmjId90WIlHfN-7B6K0Z40HxRcq3SZrxsKUvnDEWP18omwEau-XAPXa5Y5p4XKI~8URszw-d4CmfIrGy-MaLDD30FE1gCsZ8GAUhVBclwvtuSlzoFmXrnxyhXfaH73SJIY2EMl20203WzruUl1RnewUzcAey-eGQ8fmmOYwCPqPajIFEHy9mpTAhLN21kMgEaigOl0qdQQIzVRMpU6Upez6I4Itev74GpNuDpEnNmbTk9vUKHHj5JniI0uP5l7EPGVdsQjU9rXCbfRXIAPkfkw__'
      }
    },
    {
      id: 3,
      content: 'Another amazing view!',
      createdAt: '2024-08-08T11:12:45.123Z',
      mediaUrls: [
        { id: 1, type: 'image', url: 'https://s3-alpha-sig.figma.com/img/020a/e43f/1d0eba11a5d3db0cdc8fc142c77fd31f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfEhk44Ie8oXq9EFIrjxjob9HWz0x1MKQSxqcTn2-vQtmMQCkP4xbp0UdAWScZ7YzaWURyJu4WwtAuvf5KEmD0j~5GtlIF8rfN-JRJ1kUMEu87CAqFQydj2~c-pKNJszfyIFUJ0psK7Tz4tOtDK9GTL-cUy1qYau0lRRjg4ypKHOZA9BV4-EIaFdB1g7oK~cbgkpVTWNjHEe2-wYDpTNg9zRPY3TBtPr3gd0PMA0cQSUZBPH9u1bBUMLnTCTLUYHR0yV4lrsrMZEEsv~exbiQgoWtJQtpcJQFr8qWbeHnSCm8ZiNLEKo2gnyK-4x2eUxJzOhL2J7GQ4XaAXcv0hkrA__' },
      ],
      user: {
        username: 'John Doe',
        avatarUrl: 'https://s3-alpha-sig.figma.com/img/4961/b825/03746d58b13bf1eaa3f12121fcfe4c60?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eniTCLgfj95R~KzUpSUL-aasAgh813hehmppkgsNGDSzux8aB4Gp82SVN8d44WRrTfFbLX9FHJ5r0fXsxxqxb4WU-61drwIOl6pyU91Vb52ctb4hBhO7j~irexQ9rx1lUAjJZKWAQxBJopILlnuDgefCg5Md-QVl0DbaNiQOz2T-rEovxANFiHOdU1U-bh9E6XgdVSFGm3QgW7AsTgb4loCG9ixL3o3Q3TA06JVdkvLyLzuaCXTcx0DnQjAGhC2-FdkWXr5XMfeS3lBDECqHds5zg3rgTvCXTwORlQaAmtYNfLwL0HYY5~4MzZd6u3h0ctQgkODgzkIvk8fQxeltGA__'
      }
    }
  ];

  const userSuggestions = [
    {
      id: 1,
      name: 'Kriti Chadha',
      avatarUrl: '/Assets/defavours.jfif',
      description : "vous suit"
    },
    {
      id: 2,
      name: 'Durgesh Nandini',
      avatarUrl: '/Assets/mkbhd.jfif',
      description : "vous suit"
    },
    {
      id: 3,
      name: 'Maria Gomez',
      avatarUrl: '/Assets/openaidalle.jfif',
      description : "vous suit"
    },
    {
      id: 4,
      name: 'Maria Gomez',
      avatarUrl: '/Assets/wahab.xyz.jfif',
      description : "vous suit"
    },
  ];

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

      if (accessToken) {
        try {
          const response = await axios.get(`${baseURL}/api/posts/feed`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          });
          if (Array.isArray(response.data.content)) {
            setPosts(response.data.content);
          }
        } catch (error) {
          console.error('Error fetching feed:', error);
        } finally {
          setLoading(false)
        }
       }
    };

    fetchPosts();
  }, []);

  const renderFeedWithSuggestions = () => {
    const postsAndSuggestions: JSX.Element[] = [];
    if (Array.isArray(posts)){
      posts.forEach((post, index) => {
        postsAndSuggestions.push(
          <Feed key={`post-${post.id}`} posts={[post]} />
        );
  
        if (index === 1) {
          postsAndSuggestions.push(
            <UserSuggestions
              key="user-suggestions"
              suggestions={userSuggestions}
            />
          );
        }
      });
    }

    return postsAndSuggestions;
  };

  if (loading) {
    return <LoadingDots />
  }

  return (
    <>
    <div className={styles.feed_container}>
      <div className={styles.feed_row}>
        {renderFeedWithSuggestions()}
      </div>
    </div>
    </>
  );
};

export default FeedPage;
