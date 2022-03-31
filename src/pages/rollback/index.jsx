import React from "react";
import Background from "../../components/background";
import styles from "./style.module.css";

const Rollback = () => {
  return (
    <>
      <Background url="assets/backgrounds/2.jpg" />
      <div className={styles.rollback}>
        <h1>Installing Old Rain World Versions</h1>
        <ul>
          <li>
            You will need to use the{" "}
            <a
              href="https://github.com/SteamRE/DepotDownloader"
              target="_blank"
              rel="noopener noreferrer"
            >
              DepotDownloader
            </a>{" "}
            command line tool in order to downpatch to earlier versions of Rain
            World. You can watch{" "}
            <a
              href="https://www.youtube.com/watch?v=44HBxzC_RTg"
              target="_blank"
              rel="noopener noreferrer"
            >
              this video
            </a>{" "}
            for instructions on how to use it. The relevant IDs for Rain World
            are:
          </li>
        </ul>
        <div className={styles.information}>
          <p>App ID: 312520</p>
          <p>Depot ID: 312521</p>
          <table>
            <tbody>
              <tr>
                <th>Version</th>
                <th>Manifest ID</th>
              </tr>
              <tr>
                <th>1.0</th>
                <th>6255017919215798397</th>
              </tr>
              <tr>
                <th>1.01</th>
                <th>6365756072218008879</th>
              </tr>
              <tr>
                <th>1.5</th>
                <th>791678341923736547</th>
              </tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li>
            If the downloaded version doesn't have a "UserData" folder included
            with the game, you'll have to create one (it's fine if it's empty),
            otherwise the game will freeze before you can get to the title
            screen.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rollback;
