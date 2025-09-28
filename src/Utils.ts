import { WebsiteType } from "./types/StoreTypes";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


export const renderIcon = (x: WebsiteType) => {
  switch (x) {
    case WebsiteType.LinkedIn: {
      return CiLinkedin;
    }
    case WebsiteType.Github: {
      return FaGithub;
    }
    default: {
      return TbWorldWww;
    }
  }
};
