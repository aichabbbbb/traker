import React, { useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import styles from "./MiddleHomePage.module.css";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaCommentDots, FaUser } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { BsSendFill } from "react-icons/bs";
import baseURL from "../../utils/baseUrl"

type Media = {
  id: number;
  type: string;
  url: string;
};

type Post = {
  id: number;
  content: string;
  createdAt: string;
  mediaUrls: Media[];
  user: {
    username: string;
    profileImageUrl?: string;
  };
  likeCount: number;
  commentCount: number;
};

type FeedProps = {
  posts: Post[];
};

const Feed: React.FC<FeedProps> = ({ posts }) => {
  const [postLikes, setPostLikes] = useState<{ [key: number]: number }>({});

  const handleLikeClick = async (postId: number) => {
    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    if (accessToken) {
      try {
        await axios.post(
          `${baseURL}/api/reactions/post`,
          null, // No request body needed
          {
            params: { postId, type: 'LIKE' }, // Send postId and type as URL parameters
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        );

        setPostLikes((prev) => ({
          ...prev,
          [postId]: (prev[postId] || posts.find((post) => post.id === postId)?.likeCount || 0) + 1,
        }));
      } catch (error) {
        console.error('Error liking post:', error);
      }
    }
  };

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id} className={styles.feed_item}>
            <div className={styles.feed_header}>
              <div className={styles.user_info}>
                <div className={styles.user_info_image}>
                  {post.user.profileImageUrl ? (
                    <img src={post.user.profileImageUrl} alt="User Avatar" />
                  ) : (
                    <FaUser className={styles.default_avatar} />
                  )}
                </div>
                <div className={styles.username_area}>
                  <span className={styles.username}>{post.user.username}</span>
                  <MdVerified className={styles.verified_icon} />
                  <span className={styles.created_at}>
                    {new Date(post.createdAt).toLocaleDateString()}{' '}
                    {new Date(post.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              <button className={styles.more_options}>•••</button>
            </div>

            <div className={styles.feed_content}>
              {post.mediaUrls.length > 0 && (
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation
                >
                  {post.mediaUrls.map((media, index) => (
                    <SwiperSlide key={index}>
                      {media.type === 'image' ? (
                        <img
                          src={`http://213.130.144.203:8084/files/${media.url}`}
                          alt={`Post Image ${index}`}
                          className={styles.mediaItem}
                        />
                      ) : media.type === 'video' ? (
                        <video
                          src={`http://213.130.144.203:8084/files/${media.url}`}
                          controls
                          className={styles.mediaItem}
                        />
                      ) : null}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <div className={styles.feed_footer}>
              <div className={styles.actions}>
                <div className={styles.area_comment_like}>
                  <div className={styles.display_actions}>
                    <span>{postLikes[post.id] || post.likeCount}</span>
                    <button className={styles.like_button} onClick={() => handleLikeClick(post.id)}>
                      <FaHeart />
                    </button>
                  </div>
                  <div className={styles.display_actions}>
                    <span>{post.commentCount}</span>
                    <button className={styles.comment_button}>
                      <FaCommentDots />
                    </button>
                  </div>
                </div>
                <div className={styles.area_share_save}>
                  <button className={styles.share_button}>
                    <BsSendFill />
                  </button>
                  <button className={styles.save_button}>
                    <SiSubstack />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feed;
