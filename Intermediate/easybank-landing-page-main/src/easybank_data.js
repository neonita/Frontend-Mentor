import Confetti from "./assets/images/image-confetti.jpg";
import Currency from "./assets/images/image-currency.jpg";
import Plane from "./assets/images/image-plane.jpg";
import Resto from "./assets/images/image-restaurant.jpg";
import {
  IconAPI,
  IconBudgeting,
  IconOnboarding,
  IconOnline,
} from "./assets/icons";

const easybank_data = [
  [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      svg: <IconOnline />,
    },

    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      svg: <IconBudgeting />,
    },
    {
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      svg: <IconOnboarding />,
    },
    {
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      svg: <IconAPI />,
    },
  ],
  [
    {
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      preview:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
      img: <Currency />,
      alt: "Image of money from various countries.",
    },
    {
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      preview:
        "Our simple budgeting feature allows you to separate out your spending and set ealistic limits each month. That means you",
      img: <Resto />,
      alt: "Image of a person's dish, in a restaurant setting.",
    },
    {
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      preview:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you",
      img: <Plane />,
      alt: "Image of a plane's wing from the point of view of being inside the plane.",
    },
    {
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      preview:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site",
      img: <Confetti />,
      alt: "Image of confetti falling, with a blue background.",
    },
  ],
];

export default easybank_data;
