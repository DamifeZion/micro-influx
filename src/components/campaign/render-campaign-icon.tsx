import { RiInstagramFill } from "react-icons/ri";
import { TCampaignChannels } from "@/types";
import {
   FaFacebook,
   FaTiktok,
   FaYoutube,
   FaTwitter,
   FaPinterest,
   FaGithub,
   FaGlobe,
} from "react-icons/fa"; // FaGlobe for unknown channels

export const renderCampaignIcon = (campaignChannel: TCampaignChannels) => {
   let icon;

   switch (campaignChannel) {
      case "facebook":
         icon = <FaFacebook />;
         break;
      case "instagram":
         icon = <RiInstagramFill />;
         break;
      case "tiktok":
         icon = <FaTiktok />;
         break;
      case "youtube":
         icon = <FaYoutube />;
         break;
      case "twitter":
         icon = <FaTwitter />;
         break;
      case "pinterest":
         icon = <FaPinterest />;
         break;
      case "github":
         icon = <FaGithub />;
         break;
      default:
         // Fallback to a generic icon for unknown platforms
         icon = <FaGlobe />;
         break;
   }

   return icon;
};
