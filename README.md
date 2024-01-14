# Proto

## protoc

https://github.com/protocolbuffers/protobuf/releases/

## 文档

https://github.com/pseudomuto/protoc-gen-doc/releases

```bash
protoc --doc_out=./doc ./*.proto
```

## JavaScript & TypeScript

### 安装

```bash
npm install -g protobufjs
```

### 构造 js 文件

```bash
pbjs -t static-module -w commonjs -o my_protobuf.js ./*.proto
```

### 构造 ts 文件

```bash
pbts -o my_protobuf.d.ts my_protobuf.js
```

## Python

### 安装

```bash
python -m pip install grpcio-tools
```

### 构造文件

```bash
python -m grpc_tools.protoc -I./ --python_out=./python --grpc_python_out=./python ./*.proto
```
