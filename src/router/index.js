const router = [
  {
    title: 'Trang chủ Tài liệu học tập',
    component: './screens/home/containers/homeContainer',
    path: '/',
    isProtected: false,
  },
  {
    title: 'Chuyên đề',
    component: './screens/thematic/containers',
    path: '/chuyen-de',
    isProtected: false,
  },
];

export default router;
