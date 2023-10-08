# ts-json-schema-generator 

## Example Repository for [vega/ts-json-schema-generator/issues/1790](https://github.com/vega/ts-json-schema-generator/issues/1790)

Example with the type that is causing the error manually extracted and imported from [`validation.d.ts`](./validation.d.ts).  

```
$ ./node_modules/.bin/ts-json-schema-generator --path example.d.ts

Error: Unknown node "Primitive" (ts.SyntaxKind = 162) at /{path_to}/validation.d.ts(110,72)
```
