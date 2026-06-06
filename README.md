# Sanity CMS Backend code

When cloning the repo, we need to create a sanity.config.ts file as well

below are the content of this file 

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'NAME',

  projectId: 'PROJECT_ID',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```
