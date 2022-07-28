import IconBlacklist from "./assets/icons/icon-blacklist.svg";
import IconPreview from "./assets/icons/icon-preview.svg";
import IconText from "./assets/icons/icon-text.svg";
import Google from "./assets/images/logo-google.png";
import HP from "./assets/images/logo-hp.png";
import IBM from "./assets/images/logo-ibm.png";
import Microsoft from "./assets/images/logo-microsoft.png";
import VG from "./assets/images/logo-vector-graphics.png";

const data = [
  [
    {
      id: 0,
      title: "Quick Search",
      description:
        "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      id: 1,
      title: "iCloud Sync",
      description:
        "Instantly saves and syncs snippets across all your devices.",
    },
    {
      id: 2,
      title: "Complete History",
      description:
        "Retrieve any snippets from the first moment you started using the app.",
    },
  ],
  [
    {
      id: 0,
      svg: <IconBlacklist />,
      alt: "Blacklist icon",
      title: "Create blacklists",
      description:
        "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    },
    {
      id: 1,
      svg: <IconText />,
      alt: "Text icon",
      title: "Plain text snippets",
      description:
        "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      id: 2,
      svg: <IconPreview />,
      alt: "Preview icon",
      title: "Sneak preview",
      description:
        " Quick preview of all snippets on your Clipboard for easy access.",
    },
  ],
  [
    { id: 0, png: <Google />, alt: "Google logo" },
    { id: 1, png: <HP />, alt: "HP logo" },
    { id: 2, png: <IBM />, alt: "IBM logo" },
    { id: 3, png: <Microsoft />, alt: "Microsoft logo" },
    { id: 4, png: <VG />, alt: "Vector Graphics logo" },
  ],
];

export default data;
