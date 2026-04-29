---
slug: "takuya-tts"
name: "takuya-tts"
fqdn: "https://takuya-tts.hikamer.f5.si"
shortDescription: "日本語テキスト読み上げ（TTS）サービス。Oddcast TTS APIを使用し、入力テキストを自然な音声で再生。MP3ダウンロード対応。"
tags: [TTS, 音声, ツール, 日本語]
---

# takuya-tts — 日本語テキスト読み上げ

takuya-ttsは、入力した日本語テキストを自然な音声で読み上げるシンプルなTTSサービスです。Oddcast TTS API（cache-a.oddcast.com）を利用して音声合成を行います。

## 主な機能

- **日本語テキスト読み上げ**: Oddcast TTS APIの日本語音声パラメータ（EID=3, LID=12, VID=2）を使用
- **リアルタイム音声再生**: HTML5 Audio要素で即時再生
- **MP3ダウンロード**: Blobフェッチでダウンロード機能
- **動的タイトル更新**: 読み上げ中にページタイトルを更新
- **SEO最適化**: schema.org WebApplication JSON-LD、日本語キーワード、OpenGraph、canonical設定
- **アクセシビリティ**: aria-label、セマンティックHTML

## 技術スタック

- Next.js 16.1.6、React 19.2、TypeScript、Tailwind CSS 4
- Geist + Geist Mono フォント
- babel-plugin-react-compiler
- Oddcast TTS API（ブラウザから直接API呼び出し）
- 青/藍色グラデーションデザイン
- PWAマニフェスト

## 開発の裏話

Oddcast TTS APIの日本語音声パラメータ（EID=3, LID=12, VID=2）を見つけるまでに非公開ドキュメントの解析が必要でした。