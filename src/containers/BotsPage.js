import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Filter from "./Filter";

class BotsPage extends React.Component {
  state = {
    selectedBots: [],
    method: "asc"
  };

  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    return fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(bots => this.setState({ bots }));
  };

  handleClick = id => {
    this.setState({ currentBot: this.findBot(id) });
  };

  handleSelect = id => {
    this.selectBot(this.findBot(id));
  };

  handleDropdown = e => {
    this.setState({ method: e.target.value });
  };

  selectBot = bot => {
    this.state.selectedBots.includes(bot)
      ? this.setState({
          selectedBots: this.state.selectedBots.filter(
            stateBot => stateBot.id !== bot.id
          )
        })
      : this.setState({ selectedBots: [...this.state.selectedBots, bot] });
  };

  sortController = () => {
    switch (this.state.method) {
      case "asc":
        return this.sortState("name", 1, -1);
      case "desc":
        return this.sortState("name", -1, 1);
      case "low":
        return this.sortState("health", 1, -1);
      case "high":
        return this.sortState("health", -1, 1);
      case "weak":
        return this.sortState("health", 1, -1);
      case "strong":
        return this.sortState("health", -1, 1);
      default:
        return this.state.bots;
    }
  };

  // Helper methods:
  findBot = id => this.state.bots.find(bot => bot.id === id);

  flushState = param => this.setState({ [`${param}`]: null });

  sortState = (k1, v1, v2) =>
    this.state.bots.slice().sort((a, b) => (a[k1] > b[k1] ? v1 : v2));

  render() {
    return (
      <div>
        {this.state.bots && (
          <React.Fragment>
            <YourBotArmy
              bots={this.state.selectedBots}
              handleClick={this.handleClick}
              handleSelect={this.handleSelect}
            />
            <Filter handleDropdown={this.handleDropdown} />
            {this.state.currentBot ? (
              <BotSpecs
                bot={this.state.currentBot}
                handleSelect={this.handleSelect}
                flushState={this.flushState}
              />
            ) : (
              <BotCollection
                handleClick={this.handleClick}
                bots={this.sortController()}
              />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default BotsPage;
