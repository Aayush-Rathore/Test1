import png1 from "./assets/post1.png";
import png2 from "./assets/post2.png";
import png3 from "./assets/post3.png";
import profile1 from "./assets/profile1.svg";
import profile2 from "./assets/profile2.svg";
import profile3 from "./assets/profile3.svg";
import profile4 from "./assets/profile4.svg";

const posts = [
  {
    id: "A1",
    postImgUrl: png1,
    category: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    profileUrl: profile1,
    more: "I’ve worked in UX for the better part of a decade. From now on, I plan to reinvent my career path.",
    ownerName: "Sarthak Kamra",
    view: 1400,
  },
  {
    id: "A2",
    postImgUrl: png2,
    category: "🔬️ Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    profileUrl: profile2,
    more: "I’ve worked in UX for the better part of a decade. From now on, I plan to reinvent my career path.",
    ownerName: "Sarah West",
    view: 1400,
  },
  {
    id: "A3",
    postImgUrl: png3,
    category: "🗓️ Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    profileUrl: profile3,
    date: "Fri,12 Oct,2018",
    location: "Ahmedabad, India",
    website: "https://www.google.com",
    ownerName: "Ronal Jones",
    view: 1400,
  },
  {
    id: "A4",
    postImgUrl: null,
    category: "💼️ Job",
    title: "Software Developer",
    profileUrl: profile4,
    org: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    website: "https://www.google.com",
    ownerName: "Joseph Gray",
    view: 1400,
  },
];

export default posts;
