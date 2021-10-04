const router = [
  {
    title: 'Trang chủ Tài liệu học tập',
    component: './screens/home',
    path: '/',
    isProtected: false,
  },
  {
    title: 'Chuyên đề',
    component: './screens/thematic',
    path: '/chuyen-de',
    isProtected: false,
  },
];

export default router;
