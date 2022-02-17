import React from "react";
import Background from "../../components/background";
import CommunityProject from "../../components/communityProject";
import styles from "./style.module.css";

const Community = () => {
  const mscImages = [
    "assets/projects/MSC_1.gif",
    "assets/projects/MSC_2.gif",
    "assets/projects/MSC_3.gif",
    "assets/projects/MSC_4.gif",
    "assets/projects/MSC_5.gif",
    "assets/projects/MSC_6.gif",
  ];

  const droughtImages = [
    "assets/projects/drought_1.gif",
    "assets/projects/drought_2.gif",
  ];

  const martyrImages = [
    "assets/projects/martyr_1.gif",
    "assets/projects/martyr_2.gif",
  ];

  return (
    <>
      <Background url="assets/backgrounds/5.jpg" />
      <div className={styles.communityProjects}>
        <h1>Community</h1>
        <p>Jump to:</p>
        <div className={styles.links}>
          <a href="#msc">More Slugcats Expansion</a>
          <a href="#drought">Rain World Drought</a>
          <a href="#martyr">Echo World: The Martyr</a>
        </div>
        <CommunityProject
          name="More Slugcats Expansion"
          leader="AndrewFM"
          description="More Slugcats is a mod that adds five new playable slugcats, with their own storylines. Each is unique in their abilites, and unique in their spot on the timeline. As a result, there is a lot of new content exclusive to each character's playthroughs. There are new regions, creatures, items, music, alternate endings, etc. This is an expansion not just to the original mod, but to Rain World as a whole, also adding a lot of new features, new game mechanics, bug fixes, performance improvements, tweaks and polish to the base game."
          images={mscImages}
          id="msc"
          server="https://discord.com/invite/QSFTwjGz"
        />
        <CommunityProject
          name="Rain World Drought"
          leader="Dracentis"
          description="Rain World Drought is a mod for Rain World that adds a new slugcat with its own storyline. This includes a lot of new content such as a few new regions, new creatures, new pearls, and lore. Anyone can join the development team through the Rain World Drought Server. Teasers will also be posted there for non-developers."
          images={droughtImages}
          id="drought"
        />
        <CommunityProject
          name="Echo World: The Martyr"
          leader="Garrakx"
          description="Echo World is a story set in a parallel universe to Rain World following two new enigmatic slugcats through new areas, facing new challenges, and uncovering the secrets hidden in this strange alternate timeline. This mod is an expansion to the 'The Martyr' mod, currently in development."
          images={martyrImages}
          server="https://discord.com/invite/RJTReNRH"
          id="martyr"
        />
      </div>
    </>
  );
};

export default Community;
