import {isDev} from "core/globals";

export const routes = {
  mainGateway: isDev ? "/" : "//hrgulf.org",
  root: "/",
  admin: "/admin",
  admin2: "//admin-knowledge.hrgulf.org",
  auth: {
    root: "/auth",
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
  profile: {
    root: "/profile",
    main: "/profile/main",
    myPosts: {
      root: "/profile/my-posts",
      detail: "/profile/my-posts/detail",
    },
  },
  posts: {
    root: "/posts",
    all: "/posts",
    add: "/posts/add",
    detail: "/posts/detail",
    comment: "/posts/comment",
    magazines: "/posts/magazines",
    magazineDetail: "/posts/magazine-detail",
  },
  news: {
    root: "/news",
    all: "/news",
    detail: "/news/detail",
  },
  video: {
    root: "/video",
    all: "/video",
    detail: "/video/detail",
  },
  questionnaire: {
    root: "/questionnaire",
    all: "/questionnaire",
    current: "/questionnaire/current",
    questions: "/questionnaire/questions",
    previous: "/questionnaire/previous",
    result: "/questionnaire/result",
  },
  vote: {
    root: "/vote",
    all: "/vote",
    current: "/vote/current",
    questions: "/vote/questions",
    previous: "/vote/previous",
    result: "/vote/result",
  },
  contact: {
    root: "/contact",
    us: "/contact/us",
    consultants: "/contact/consultants",
  },
  about: {
    root: "/about",
    portal: "/about/portal",
    us: "/about/us",
  },
};

export default routes;
