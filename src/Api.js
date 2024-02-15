const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b";

export async function getPlayers() {
  //call all API
  try {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error(error);
  }
}

export async function getPlayer(playerId) {
  //call single call 1 API
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const data = await response.json();
    return data.data.player;
  } catch (error) {
    console.error(error);
  }
}
export async function createPlayers(player) {
  //call all add API
  //debugger; for find the problem in network players
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const data = await response.json();
    return data.data.newPlayer;
  } catch (error) {
    console.error(error);
  }
}
export async function deletePlayers(playerId) {
  //call all API
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    //nothing to return
  } catch (error) {
    console.error(error);
  }
}
export async function getTeams(){//call all API
    try{
        const response = await fetch (`${API_URL}/teams`);
        const data = await response.json()
        return data.data.teams
    }catch(error){
    console.error(error)
    }
    
}

