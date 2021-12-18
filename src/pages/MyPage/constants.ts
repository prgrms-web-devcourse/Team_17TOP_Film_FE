const selectList = {
  myFilm: {
    FULL_VIEW: '전체보기',
    WATCH_OPENED_VIEW: '열린 필름 보기',
    WATCH_CLOSED_VIEW: '닫힌 필름 보기',
    WATCH_NOT_SHARED: '혼자만의 필름 보기',
  },
  sharedFilm: {
    FULL_VIEW: '전체보기',
    WATCH_OPENED_VIEW: '열린 필름 보기',
    WATCH_CLOSED_VIEW: '닫힌 필름 보기',
  },
};

const tabList = {
  myFilm: '내 필름',
  sharedFilm: '공유받은 필름',
};

export type TabListKey = keyof typeof selectList;
export { selectList, tabList };
