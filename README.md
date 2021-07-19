# CDK テンプレート

CDK テンプレートです。

## 前提条件

本プロジェクトをビルド・デプロイするために必要なソフトウェア・設定

- [Prerequisites - Getting started with the AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_prerequisites)
- [Node.js](https://nodejs.org/en/download/) 10.3.0 or later
- [Yarn](https://yarnpkg.com/)
- [AWS CLI 2](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)
- [AWS CLI 設定ファイルと認証情報ファイルの設定](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html)

## 使い方

```sh
# 依存モジュールのインストール
yarn

# ビルド
yarn build

# デプロイ
yarn deploy
```

### テンプレート修正方法
1. `hogehoge` を適当な値に置換（ファイル名も変更する）
2. `xxxxx` を適当な AWSアカウントID に置換

## ビルド・テスト

### NPM Scripts

`cdk` コマンドについては [AWS CDK Toolkit](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) を参照してください。

| command           | description                                     |
| ----------------- | ----------------------------------------------- |
| `yarn build`      | build (TypeScript transpile)                    |
| `yarn clean`      | remove build output                             |
| `yarn test`       | run unit tests                                  |
| `yarn test -u`    | update snapshots                                |
| `yarn lint`       | statically analyze the code                     |
| `yarn lint --fix` | statically analyze the code and format the code |
| `yarn typedoc`    | generate Typedoc                                |
| `yarn stacks`     | `cdk list`                                      |
| `yarn context`    | `cdk context`                                   |
| `yarn diff`       | `cdk diff`                                      |
| `yarn synth`      | `cdk synth`                                     |
| `yarn deploy`     | `cdk deploy`                                    |
| `yarn destroy`    | `cdk destroy`                                   |
| `yarn bootstrap`  | `cdk bootstrap`                                 |

## プロジェクト構成

AWS CDK の `app` テンプレートを利用したプロジェクトに、いくつかのディレクトリ・ファイルを追加した形式です。

```
cdk-hogehoge
├── bin
├── lib
├── test
├── .editorconfig
├── .eslintignore
├── .eslintrc.yml
├── .gitignore
├── .npmignore
├── cdk.json
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
├── typedoc.json
└── yarn.lock
```
