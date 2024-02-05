interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  // statrTrail: () => string;
  startTrial(): string;
  getCoupon(couponname: String): number;
}

//reopening of the interfaces
interface User {
  gihubToken: string;
}
const pg: User = {
  dbId: 22,
  email: "h@email.com",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  gihubToken: "githubcolpilot",
  getCoupon: (name: "hitesg") => {
    return 10;
  },
};

//extend
interface admin extends User {
  role: "Admin" | "ta" | "learner";
}
const pg2: admin = {
  role: "Admin",
  dbId: 22,
  email: "h@email.com",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  gihubToken: "githubcolpilot",
  getCoupon: (name: "hitesg") => {
    return 10;
  },
};
export {};
