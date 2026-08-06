import {type SchemaTypeDefinition} from 'sanity'
import jobType from './jobType'
import leadershipType from './leadershipType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    jobType,
	leadershipType,
  ],
}
