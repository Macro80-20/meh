import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  return (
    <div className="ui four column grid">
      <h1 style={{ marginTop: "2rem" }}>Collection of all bots</h1>
      <div className="row">
        {props.bots.map(bot => (
          <BotCard handleClick={props.handleClick} key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
