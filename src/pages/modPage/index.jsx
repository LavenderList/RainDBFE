import React, { useContext, useState, useEffect } from "react";
import { useRoute, Redirect } from "wouter";
import { ModContext } from "../../context/modsContext";
import { Link } from "wouter";
import { randomMod } from "./random";
import Loading from "../../components/loading";
import styles from "./style.module.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const ModPage = () => {
  const [, params] = useRoute("/mod/:version/:name");
  const [isOpen, setIsOpen] = useState(false);
  const [randomModsArray, setRandomModsArray] = useState([]);
  const { mods } = useContext(ModContext);
  const { version, name } = params;

  useEffect(() => {
    if (mods) {
      setRandomModsArray([
        randomMod(mods[version]),
        randomMod(mods[version]),
        randomMod(mods[version]),
      ]);
    }
  }, [name, version, mods]);

  if (!mods) {
    return <Loading />;
  }

  const mod = mods[version].find(
    (mod) =>
      encodeURI(mod.name.replace(/\.|\[|\]|\/|\:/g, " ").replace(/\s/g, "")) ===
      name
  );

  if (!mod || version === "arenas" || version === "palettes") {
    return <Redirect to="/404" />;
  }

  const handleDownloadClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className={styles.modContent}>
        <div className={styles.thumb}>
          <img
            src={
              mod.thumb.includes("https:") ? mod.thumb : `../../${mod.thumb}`
            }
            alt={mod.name}
            loading="lazy"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <h1>{mod.name}</h1>
          </div>
          <div className={styles.author}>
            {mod.author_ext ? (
              <Tooltip
                placement="bottom"
                overlay={<span>{mod.author_ext}</span>}
              >
                <h2>
                  By <span style={{ color: "#f3cd6c" }}>{mod.author}</span>
                </h2>
              </Tooltip>
            ) : (
              <h2>By {mod.author}</h2>
            )}
          </div>
          <p>{mod.desc}</p>
        </div>
        <div className={styles.download} onClick={handleDownloadClick}>
          <span className="material-icons">download</span>
          {isOpen ? (
            <div className={styles.preDownload}>
              <div className={styles.downloadInfo}>
                {mod.req ? (
                  <p>{mod.req}</p>
                ) : (
                  <p>This mod don't have requirements</p>
                )}
                <a href={mod.url} target="_blank" rel="noopener noreferrer">
                  <span className="material-icons">download</span>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.moreMods}>
        <h2>More Mods</h2>
        <div className={styles.modList}>
          {randomModsArray.map((mod, index) => (
            <Link
              to={`/mod/${version}/${mod.name
                .replace(/\.|\[|\]|\/|\:/g, " ")
                .replace(/\s/g, "")}`}
              key={index}
            >
              <a>
                <div className={styles.mod}>
                  <div className={styles.thumb}>
                    <img
                      src={
                        mod.thumb.includes("https:") ||
                        mod.thumb.includes("http:")
                          ? mod.thumb
                          : `../../${mod.thumb}`
                      }
                      alt={mod.name}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.title}>
                    <h2>{mod.name}</h2>
                    {mod.author_ext ? (
                      <Tooltip
                        placement="bottom"
                        overlay={<span>{mod.author_ext}</span>}
                      >
                        <h3>
                          By{" "}
                          <span style={{ color: "#f3cd6c" }}>{mod.author}</span>
                        </h3>
                      </Tooltip>
                    ) : (
                      <h3>By {mod.author}</h3>
                    )}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ModPage;
