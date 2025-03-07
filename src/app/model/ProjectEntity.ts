import mongoose from "mongoose";
import Project from "./ProjectInformation";

export interface ProjectEntity extends Project, mongoose.Document { }

/* PetSchema will correspond to a collection in your MongoDB database. */
export const ProjectSchema = new mongoose.Schema<ProjectEntity>({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this project."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  description: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide description for your project"],
    maxlength: [255, "Description cannot be more than 255 characters"],
  },
  deadline: {
    /* The species of your pet */

    type: Number,
    required: [true, "Please enter a deadline for your project."],
  },
  stack: {
    /* Pet's age, if applicable */

    type: [String],
  },
  functionalRequirements: {
    /* Pet's age, if applicable */

    type: [String],
  },
  otherRequirements: {
    /* Pet's age, if applicable */

    type: [String],
  },
  designSpecs: {
    /* Pet's age, if applicable */

    type: [String],
  },
  additionalInformation: {
    /* Pet's age, if applicable */

    type: [String],
  }
  
});

export default mongoose.models.ProjectEntity || mongoose.model<ProjectEntity>("ProjectEntity", ProjectSchema);