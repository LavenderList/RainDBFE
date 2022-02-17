import React from "react";
import Mod from "../../components/mod";

const Joke = () => {
  //trademark unicode
  return (
    <div className="joke" style={{ display: "flex", justifyContent: "center" }}>
      <Mod
        name="More Slugcats"
        author="The More Slugcats Team"
        author_ext="AndrewFM, Willburd, Progfox, Connor '12LBS' Skidmore, Ongomato, Tom 'Norgad' Starbuck, AnnoyingFlower, Raggedy_Muffins, Shupa Mikey, Bela, Flirpy, Hasan Sefer, the one who screams, Evan 'Cappin' Muncy, Logan Soule, Andy 'Dakras' Dunn, Hathrar, DragonPropaganda, Minkimaro"
        type="Content"
        description="Soon™"
        category="1.8"
        thumb="../../assets/previews/fakeMoreSlugcats.png"
      />
    </div>
  );
};

export default Joke;
