import React from "react";
import Background from "../../components/background";
import styles from "./style.module.css";

const Tutorials = () => {
  return (
    <>
      <Background url="assets/backgrounds/2.jpg" />
      <div className={styles.container}>
        <div className={styles.column1}>
          <h1>Installing Mods</h1>
          <p>
            Before installing any mods, first locate your Rain World folder.
            This can be located easily from your Steam install directory. From
            the Steam directory, go to "steamapps/common/Rain World". Then
            backup your important files, especially your save files! Saves are
            located in the UserData folder; make a copy of them somewhere.
          </p>
          <h2>Hook / Patch Mods:</h2>
          <p>
            Any number of these types of mods can be used together at the same
            time, using BepInEx.
          </p>
          <ol>
            <li>
              <a
                href="https://beestuff.pythonanywhere.com/audb/api/v2/bepinex/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download BepInEx
              </a>{" "}
              and extract the contents of the zip file into your Rain World
              folder.
            </li>
            <li>
              <a
                href="https://github.com/Rain-World-Modding/BOI/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download BOI Mod Manager
              </a>{" "}
              and extract it anywhere.
            </li>
            <li>Run "BOI.exe"</li>
            <li>
              Press "Select Path", navigate to your Rain World folder, and
              select it.
            </li>
            <li>Click the "Press again to load modlist" button.</li>
            <li>
              Navigate to Rain World's folder, and put your mods in the "Mods"
              folder.
            </li>
            <li>
              Enable/disable mods as you need in BOI using the checkboxes, then
              close BOI and launch Rain World.
            </li>
          </ol>
          <h2>Standalone Mods:</h2>
          <p>
            Standalone mods are mods that can only be used one at a time.
            Certain mods come with a README file. Always be sure to check those
            for special install instructions.
          </p>
          <p>
            Navigate to the RainWorld_Data/Managed folder, and replace
            ‘Assembly-CSharp.dll’ with your modded .dll.
          </p>
          <p>
            That’s it, the mod is now installed! To uninstall the mod and revert
            the game to its normal state, right click the game in Steam, and use
            "Verify Integrity of Game Cache". Then restore the save files you
            backed up.
          </p>
        </div>
        <div className={styles.column2}>
          <h1>Creating Mods</h1>
          <h2>Essential Download Links:</h2>
          <ul>
            <li>
              <a
                href="https://cdn.discordapp.com/attachments/305139167300550666/438565425303781376/Devtools.dll"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dev Tools
              </a>
            </li>
            <li>
              <a
                href="https://ln.sync.com/dl/db7b0cf70/nebg7d6b-qg7gjua7-gjdi94jn-xuvivhw3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Level Editor
              </a>
            </li>
            <li>
              <a
                href="https://github.com/0xd4d/dnSpy/actions"
                target="_blank"
                rel="noopener noreferrer"
              >
                dnSpy
              </a>
            </li>
          </ul>
          <p>
            <b>Dev Tools</b> are in-game debug and editing tools that can be
            used to make basic modifications to the pre-existing maps. They are
            a good starting point for new modders.
          </p>
          <p>
            <b>The Official Level Editor</b> is used to make new maps that can
            be added into the game. It is the actual editor that the developers
            created and used to make all of the maps in the game, so it is very
            powerful! However, it is also quite unyieldy, and requires patience,
            experimentation, and tenacity to learn.
          </p>
          <p>
            <b>dnSpy</b> is an assembly decompiler tool for advanced modders
            with programming experience who intend to make changes to the game's
            code.
          </p>
          <h2>Community Support:</h2>

          <ul>
            <li>
              The{" "}
              <a
                href="https://rain-world-modding.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rain World Modding Wiki
              </a>{" "}
              is the central location for collecting community knowledge on
              modding Rain World. Look here for all kinds of useful information
              and tutorials.
            </li>
            <li>
              Visit the modding channels on the{" "}
              <a
                href="https://discord.gg/rainworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rain World Discord
              </a>{" "}
              to talk with fellow modders and ask questions!
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=YQ0DO-fmPCE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>{" "}
              is a comprehensive video tutorial on how to make maps and regions
              with the level editor.
            </li>
            <li>
              <a
                href="https://rain-world-modding.github.io/pages/making-code-mods/BepInPlugins.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>{" "}
              is a handy guide for getting started with making BepInEx mods.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tutorials;
