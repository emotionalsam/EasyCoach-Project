const TYPES = {
  ATHLETE: {
    SHOTS: {
      G: "Goals By Athlete",
      A: "Assists By Athlete",
      Pts: "Points By Athlete",
      Sh: "Shots By Athlete",
      "Sh %": "Shot Percentage By Athlete",
      SOG: "Shots On Goal By Athlete",
      "SOG %": "Shots On Goal Percentage By Athlete",
    },
    GOALKEEPER: {
      GA: "Goals Allowed By Athlete",
      GAAvg: "Goals Allowed Average By Athlete",
      Saves: "Saves By Athlete",
      SOG: "Shots On Goal By Athlete",
      "%": "Save Percentage By Athlete",
    },
    OTHER: {
      Min: "Minutes Played By Athlete",
      F: "Fouls By Athlete",
      YC: "Yellow Cards By Athlete",
      RC: "Red Cards By Athlete",
    },
  },
  "ATHLETE ADVANCED": {
    TOUCHES: {
      T: "Touches By Athlete",
      "T Att 3rd": "Touches By Athlete - Attack 3rd",
      FA: "Final Acts",
      TO: "Turnovers By Athlete",
      SH: "Shots By Athlete",
      CK: "Corner Kicks By Athlete",
      FK: "Free Kicks By Athlete",
      Cr: "Crosses By Athlete",
      TI: "Throw-Ins by Athlete",
      GK: "Goal Kicks By Athlete",
      GTh: "Goalkeeper Throws",
      P: "Goalkeeper Punts",
      Turn: "Turn By Athlete",
      W: "Athlete Wins",
      "W%": "Athlete Win Percentage",
    },
    PASSING: {
      Total: "Total Completed Pass Percentage By Athlete",
      Att: "Completed Pass Percentage By Athlete; Attack 3rd",
      Mid: "Completed Pass Percentage By Athlete; Middle 3rd",
      Def: "Completed Pass Percentage By Athlete; Defensive 3rd",
      Fwd: "Completed Forward Pass Percentage By Athlete",
      "Fwd Att 3rd": "Forward Passes By Athlete In Attack 3rd",
      Bck: "Back Passes By Athlete",
      Sde: "Side Passes By Athlete",
      Sh: "Short Passes By Athlete",
      Med: "Medium Passes By Athlete",
      Lng: "Long Passes By Athlete",
    },
  },
  TEAM: {
    SCORE: {
      "1st": "Goals By Team; 1st Period",
      "2nd": "Goals By Team; 2nd Period",
      OT: "Goals By Team; Overtime",
      TOTAL: "Total Goals By Team",
    },
    SHOTS: {
      "G-Sh": "Goal to Shots Ratio",
      "Set Play G": "Goals Scored Off Of Set Plays",
      "Sh %": "Shot Percentage By Team",
      SOG: "Shots On Goal By Team",
      "SOG %": "Shots On Goal Percentage By Team",
      "Sh 1st": "Shots By Team; 1st Period",
      "Sh 2nd": "Shots By Team; 2nd Period",
      "Sh OT": "Shots By Team; Overtime",
      TOTAL: "Total Shots By Team",
      Saves: "Saves By Team",
    },
    "SET PLAYS": {
      G: "Goals Scored Off Of Set Plays",
      "CK 1st": "Corner Kicks By Team; 1st Period",
      "CK 2nd": "Corner Kicks By Team; 2nd Period",
      "CK OT": "Corner Kicks By Team; Overtime",
      "CK TOTAL": "Total Corner Kicks By Team",
      "CK%": "Successful Corner Kick Percentage",
      FK: "Free Kicks By Team",
      "FK%": "Successful Free Kick Percentage",
      PK: "Penalty Kicks By Team",
      "PK%": "Successful Penalty Kick Percentage",
    },
    POSSESSION: {
      "% Total": "Total Percentage of Possession Time By Team",
      "% 1st Half": "Percentage of Possession Time By Team; 1st Half",
      "% 2nd Half": "Percentage of Possession Time By Team; 2nd Half",
      Total: "Total Possession Time By Team",
      Attack: "Total Attack 3rd Time By Team",
      Middle: "Total Middle 3rd Time By Team",
      Defensive: "Total Defensive 3rd Time By Team",
    },
    OTHER: {
      Fouls: "Fouls By Team",
      "Yellow Cards": "Yellow Cards By team",
      "Red Card": "Red Cards By Team",
      Advantage: "Advantages By Team",
      Offside: "Offsides By Team",
      Aerial: "Aerial Battles Won By Team",
      Injury: "Injuries By Team",
    },
    ADVANCED: {
      Touch: "Touches By Team",
      TO: "Turnovers By Team",
      Pass: "Pass Completion Total Percentage By Team",
      "Fwd Pass": "Forward Passes By Team",
      "Fwd Pass Att 3rd": "Forward Passes in Attack 3rd By Team",
      "1 Str": "1 Pass String By Team",
      "2 Str": "2 Pass String By Team",
      "3 Str": "3 Pass String By Team",
      "4 Str": "4 Pass String By Team",
      "5 Str": "5 Pass String By Team",
      "6 Str": "6 Pass String By Team",
      "7 Str": "7 Pass String By Team",
      "8 Str": "8 Pass String By Team",
      "9 Str": "9 Pass String By Team",
      "10+": "10 (or more) Pass String By Team",
    },
  },
};

export { TYPES };
