import { Schema, model } from "mongoose";

const RoleSchema = Schema({
      role:{
        type:"string",
        required:[true, "El rol es obligatorio"]
      }
})

export default model("role",RoleSchema)