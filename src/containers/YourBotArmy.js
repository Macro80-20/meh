import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  return (
    <div className="ui segment inverted olive bot-army">
      <h1>Your Bot Army</h1>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={props.handleClick}
              handleSelect={props.handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
