# Minimal project to recreate the issue "Module did not self-register"

## To reproduce:
```
npm ci
sls offline
curl http://localhost:3000/hello
curl http://localhost:3000/time
```

## Console output

```
GET /hello (λ: hello)
{ canvas: true }
(λ: hello) RequestId: c29e21d2-6237-4a35-b35c-19d8957b8db1  Duration: 1.07 ms  Billed Duration: 2 ms


GET /time (λ: time)
✖ Unhandled exception in handler 'time'.
✖ Module did not self-register: '/home/lucacavagnoli/Documents/projects/haier/sls-issue/node_modules/canvas/build/Release/canvas.node'.
✖ Error: Module did not self-register: '/home/lucacavagnoli/Documents/projects/haier/sls-issue/node_modules/canvas/build/Release/canvas.node'.
      at Object.Module._extensions..node (node:internal/modules/cjs/loader:1210:18)
      at Module.load (node:internal/modules/cjs/loader:1004:32)
      at Function.Module._load (node:internal/modules/cjs/loader:839:12)
      at Module.require (node:internal/modules/cjs/loader:1028:19)
      at require (node:internal/modules/cjs/helpers:102:18)
      at Object.<anonymous> (/home/lucacavagnoli/Documents/projects/haier/sls-issue/node_modules/canvas/lib/bindings.js:3:18)
      at Module._compile (node:internal/modules/cjs/loader:1126:14)
      at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
      at Module.load (node:internal/modules/cjs/loader:1004:32)
      at Function.Module._load (node:internal/modules/cjs/loader:839:12)
```

## Tech details:
- node v16.17.0
- npm 8.18.0
- serverless
  - Framework Core: 3.22.0 (local) 3.22.0 (global)
  - Plugin: 6.2.2
  - SDK: 4.3.2
- serverless-offline 9.3.0

## Workaround:
`
sls offline --useChildProcesses
`

Hint:
https://github.com/josdejong/workerpool/issues/165

## References
- https://github.com/dherault/serverless-offline/issues/1112
- https://github.com/dherault/serverless-offline/issues/871
- https://github.com/Automattic/node-canvas/issues/1718
- https://github.com/josdejong/workerpool/issues/165
- https://github.com/lovell/sharp/issues/3164
- https://github.com/lovell/sharp/issues/3164#issuecomment-1082241956

## Prerequisites for deploy on AWS Lambda:
1. Deploy the layer from here: https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:990551184979:applications~lambda-layer-canvas-nodejs
2. Copy the Version ARN into serverless.yml