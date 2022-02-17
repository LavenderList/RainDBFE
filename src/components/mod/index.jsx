import React from "react";
import { Link } from "wouter";
import style from "./style.module.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const Mod = (props) => {
  const noSpace = props.name.replace(/\.|\[|\]|\/|\:/g, " ").replace(/\s/g, "");
  return props.category != "arenas" ? (
    <div className={style.mod}>
      <div className={style.modThumb}>
        {props.video || props.req ? (
          <div className={style.icons}>
            {props.video ? (
              <Tooltip
                placement="bottom"
                overlay={<span>Click to view trailer video</span>}
              >
                <a href={props.video} target="_blank" rel="noopener noreferrer">
                  <span
                    className="material-icons"
                    style={{ cursor: "pointer" }}
                  >
                    play_circle_outline
                  </span>
                </a>
              </Tooltip>
            ) : null}
            {props.req ? (
              <Tooltip placement="bottom" overlay={<span>{props.req}</span>}>
                <span className="material-icons">info</span>
              </Tooltip>
            ) : null}
          </div>
        ) : null}
        <img src={props.thumb} alt={props.name} loading="lazy" />
      </div>
      <div className={style.description}>
        <div className={style.title}>
          <h1>
            <a href={props.download} target="_blank" rel="noopener noreferrer">
              {props.name}
            </a>
          </h1>
          <div className={style.view}>
            <Link to={`/mod/${props.category}/${noSpace}`}>
              <a>
                <span className="material-icons">visibility</span>
              </a>
            </Link>
          </div>
        </div>
        {props.author_ext ? (
          <Tooltip placement="bottom" overlay={<span>{props.author_ext}</span>}>
            <h2>
              By <span style={{ color: "#f3cd6c" }}>{props.author}</span>
            </h2>
          </Tooltip>
        ) : (
          <h2>By {props.author}</h2>
        )}
        <h3>Mod Type: {props.type}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  ) : (
    <div
      className={style.mod}
      style={{ minHeight: "360px", textAlign: "center" }}
    >
      <div className={style.modThumb}>
        <img src={`assets/arenas/${props.name}_Thumb.png`} alt={props.name} />
      </div>
      <div className={style.description}>
        <h1>
          <a
            href={`/src/assets/arenas/${props.name}.zip`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>
        </h1>
        <h2>By {props.author}</h2>
      </div>
    </div>
  );
};

export default Mod;
