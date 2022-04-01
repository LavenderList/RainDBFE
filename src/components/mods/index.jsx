import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Mod from "../mod";
import { Link } from "wouter";
import { ModContext } from "../../context/modsContext";
import { FilterContext } from "../../context/filterContext";
import style from "./style.module.css";
import Filter from "../filter";
import Loading from "../loading";

const Mods = () => {
  const { mods } = useContext(ModContext);
  const { modCategory, show, search, setModCategory } =
    useContext(FilterContext);
  useEffect(() => {
    setModCategory("1.5");
  }, []);

  if (!mods) {
    <Loading />;
  }
  const modsFiltered = () => {
    const filterMods = () => {
      switch (show) {
        case "all":
          return mods[modCategory];
        case "newest":
          return [...mods[modCategory]].sort((a, b) =>
            b.order > a.order ? 1 : -1
          );
        case "tools":
          return mods[modCategory].filter((mod) => mod.tool === true);
        case "contentMods":
          return mods[modCategory].filter((mod) => mod.content === true);
        case "hookPatch":
          return mods[modCategory].filter((mod) => mod.patch === true);
        case "standalone":
          return mods[modCategory].filter((mod) => mod.standalone === true);
        default:
          return mods[modCategory];
      }
    };

    const filteredMods = filterMods();
    return search
      ? filteredMods.filter(
          (mod) =>
            mod.name.toLowerCase().includes(search.toLowerCase()) ||
            mod.author.toLowerCase().includes(search.toLowerCase()) ||
            mod.author_ext.toLowerCase().includes(search.toLowerCase())
        )
      : filteredMods;
  };
  const modList = modsFiltered();

  return (
    <>
      <Filter />
      {modCategory === "1.01" ? (
        <p className={style.rollBack}>
          All mods in this list require Rain World v1.01 to be installed. Follow
          the{" "}
          <Link to="/rollback">
            <a>Rollback Instructions</a>
          </Link>{" "}
          for getting the older version. (All v1.01 Rain World mods are
          Standalone mods)
        </p>
      ) : null}
      {modCategory == "palettes" ? (
        <h1 className={style.noMods}>Soon</h1>
      ) : (
        <InfiniteScroll
          dataLength={mods[modCategory].length}
          loader={<h4>Loading...</h4>}
        >
          {modList == 0 ? (
            <div className={style.noMods}>
              <h1>No Mods Found</h1>
            </div>
          ) : (
            <div className={style.mods}>
              {modList.map((mod, index) => (
                <Mod
                  key={index}
                  name={mod.name}
                  author={mod.author}
                  author_ext={mod.author_ext}
                  req={mod.req}
                  thumb={mod.thumb}
                  video={mod.video}
                  description={mod.desc}
                  order={mod.order}
                  app={mod.app}
                  tool={mod.tool}
                  mod={mod.mod}
                  patch={mod.patch}
                  content={mod.content}
                  type={mod.type}
                  category={modCategory}
                  download={mod.url}
                />
              ))}
            </div>
          )}
        </InfiniteScroll>
      )}
    </>
  );
};

export default Mods;
