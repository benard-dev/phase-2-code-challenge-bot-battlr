import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [botArray, setBotArray] = useState([])
  const [selectedBots, setSelectedBots] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)


  const addIndividualBotToArmy = (selectedBot) => {
    let isPresent = false
    selectedBots.map((bot) => {
      if (selectedBot.bot.id === bot.bot.id) {isPresent = true}
    })
    if (!isPresent) {
      setSelectedBots((selectedBots) => [...selectedBots,selectedBot])
    }
  }

  const releaseBotFromMyArmy = (releasedBot) => {
    const filteredBots = selectedBots.filter((selectedBot) => selectedBot.bot.id !== releasedBot.bot.id)
    setSelectedBots((selectedBots) => filteredBots)
    console.log(releasedBot.bot.id)
  }

  const dischargeBotFromServiceForever = (dischargedBot) => {
    fetch(`http://localhost:8002/bots/${dischargedBot.bot.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => console.log("Bot discharged forever! How sad!"));
    setRefreshPage((refreshPage) => !refreshPage)
    releaseBotFromMyArmy(dischargedBot)
  }
  
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((botData) => botData.json())
    .then((botJson) => {
      console.log(botJson)
      setBotArray(botJson)
    })
  }, [refreshPage])

  return (
    <div>
      <YourBotArmy selectedBots = {selectedBots} releaseBotFromMyArmy = {releaseBotFromMyArmy}/>
      <BotCollection addIndividualBotToArmy = {addIndividualBotToArmy} botArray = {botArray}  dischargeBotFromServiceForever = {dischargeBotFromServiceForever}/>
    </div>
  )
}

export default BotsPage;
