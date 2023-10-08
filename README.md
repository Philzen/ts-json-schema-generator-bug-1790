# ts-json-schema-generator 

## Example Repository for [vega/ts-json-schema-generator/issues/1790](https://github.com/vega/ts-json-schema-generator/issues/1790)

1. Example with the type that is causing the error manually extracted and imported from [`validation.d.ts`](./validation.d.ts).  
   ```sh
   ./node_modules/.bin/ts-json-schema-generator --path example.d.ts
   ```
   yields 
   > Error: Unknown node "Primitive" (ts.SyntaxKind = 162) at /path_to/ts-json-schema-generator-bug-1790/validation.d.ts(110,72)
2. Example using the desired type from `react-hook-form` directly.
   ```sh
   ./node_modules/.bin/ts-json-schema-generator --tsconfig 'tsconfig.json' --path example-rhf.d.ts
   ```
   yields
   > Error: Unknown node "Primitive" (ts.SyntaxKind = 162) at /path_to/ts-json-schema-generator-bug-1790/node_modules/react-hook-form/dist/types/path/eager.d.ts(17,72)
