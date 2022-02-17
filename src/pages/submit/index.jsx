import React from "react";
import Background from "../../components/background";
import styles from "./style.module.css";

const Submit = () => {
  return (
    <>
      <Background url="assets/backgrounds/3.jpg" />
      <main>
        <h1>How To Submit Mods</h1>
        <p>
          Getting your mods on this database is as easy as it gets. Mostly
          because we do most of the work involved in getting them here.
        </p>
        <section>
          <h2>Required Files:</h2>
          <ol>
            <li>Your mod files, all compressed in a .zip or .rar file.</li>
            <li>
              A separate text file, containing a short description of your mod's
              functions, as well as the author name (what you'd like to be
              called) and the Rain World version the mod was built for.
            </li>
            <li>A 360x250px preview image of your mod.</li>
          </ol>
        </section>
        <section>
          <h2>How To Submit:</h2>
          <p>
            So now that you've gotten your hands on all the required files,
            there's multiple ways to get your mod here:
          </p>
          <ul>
            <li>
              Google Drive: Make a new folder for your mod, and place all the
              required files (see above) inside said folder. Then, contact
              AndrewFM on the Rain World discord server and send a direct
              message containing the link to to the folder you created in the
              Google Drive.
            </li>
            <li>
              Other file hosting websites: If you use any other website, you
              will have to upload every required file as a separate link (so one
              for the .zip, one for the image, etc.) and send all those links
              through Discord DMs (see above).
            </li>
          </ul>
        </section>
        <section>
          <h2>What Then?</h2>
          <p>
            Well, then the magic happens, of course! Wait some time and we'll
            add your mod onto the database, update the website repository and
            soon enough you and everyone else will be able to download your mod
            from the Home page!
          </p>
        </section>
      </main>
    </>
  );
};

export default Submit;
