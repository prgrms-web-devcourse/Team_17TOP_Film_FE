import { compareTodayDateAndAvailableAt } from '.';
import { Post } from '../../../utils/apis/posts/myPagePosts';
import { selectList, tabList } from '../constants';

const filterPosts = (
  posts: Post[],
  selectedTab: string,
  selectedOption: string,
  userNickname: string,
): Post[] => {
  if (selectedTab === tabList.myFilm) {
    const myPosts = posts.filter(({ authorNickname }) => authorNickname === userNickname);
    if (selectedOption === selectList.myFilm.FULL_VIEW) {
      return myPosts;
    }
    if (selectedOption === selectList.myFilm.WATCH_CLOSED_VIEW) {
      return myPosts.filter(({ availableAt }) => !compareTodayDateAndAvailableAt(availableAt));
    }
    if (selectedOption === selectList.myFilm.WATCH_OPENED_VIEW) {
      return myPosts.filter(({ availableAt }) => compareTodayDateAndAvailableAt(availableAt));
    }
    if (selectedOption === selectList.myFilm.WATCH_NOT_SHARED) {
      return myPosts.filter(({ authorityImageList }) => authorityImageList.length === 1);
    }
  }
  if (selectedTab === tabList.sharedFilm) {
    const sharedPosts = posts.filter(({ authorNickname }) => authorNickname !== userNickname);
    if (selectedOption === selectList.sharedFilm.FULL_VIEW) {
      return sharedPosts;
    }
    if (selectedOption === selectList.sharedFilm.WATCH_OPENED_VIEW) {
      return sharedPosts.filter(({ availableAt }) => compareTodayDateAndAvailableAt(availableAt));
    }
    if (selectedOption === selectList.sharedFilm.WATCH_CLOSED_VIEW) {
      return sharedPosts.filter(({ availableAt }) => !compareTodayDateAndAvailableAt(availableAt));
    }
  }
  return posts;
};

export default filterPosts;
