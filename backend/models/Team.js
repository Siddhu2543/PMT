import mongoose from "mongoose";


const teamschema = new mongoose.Schema(
  {
    teamname:{
        type: String,
        require:[true,'team name is required']
    },
    
    Description:{
      typr: String,
      required: [true, "team description is required"],
    },
    project:{
        type: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Project",
            },
          ],
    }
    
}
);
const Team = mongoose.model("Team", teamschema);

module.exports = Team;
