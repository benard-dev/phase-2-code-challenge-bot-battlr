import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({selectedBots, releaseBotFromMyArmy}) {
  //your bot army code here...
  const renderSelectedBots = selectedBots.map((selectedBot) => {
    return <BotCard key = {selectedBot.bot.id} type = "yourBotArmy" bot = {selectedBot.bot} releaseBotFromMyArmy = {releaseBotFromMyArmy}></BotCard>
  }
  )
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {renderSelectedBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
