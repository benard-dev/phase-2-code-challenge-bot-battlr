import React from "react";
import BotCard from './BotCard'

function BotCollection({botArray, addIndividualBotToArmy, dischargeBotFromServiceForever}) {
  // Your code here

  const renderBots = botArray.map((bot) => {
    return <BotCard key="bot.id" type="botCollection" bot={bot} addIndividualBotToArmy={addIndividualBotToArmy} dischargeBotFromServiceForever = {dischargeBotFromServiceForever}></BotCard>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {renderBots}
      </div>
    </div>
  );
}

export default BotCollection;
