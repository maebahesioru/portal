---
slug: "saenskinmaker"
name: "saenskinmaker"
fqdn: "https://saenskinmaker.hikamer.f5.si"
shortDescription: "AIで音声ファイルから音素（ひらがな）を自動検出し、UTAU音源を作成する人力ボーカロイドジェネレーター。transformers.jsとFFmpeg.wasmでブラウザ完結。"
tags: [クリエイティブ, スキン, デザイン, ツール]
---

# saenskinmaker — SAENSキン 人力ボーカロイドジェネレーター

saenskinmakerは、音声ファイルや動画からAI（transformers.js/@xenova）で音素を自動検出し、UTAU形式の音源データを作成するツールです。ブラウザ上で完結し、音声データはサーバーに送信されません。

## 主な機能

- **音素自動検出**: transformers.jsで音声からひらがな音素を検出（Whisper・Wav2Vec2等のモデル選択対応）
- **動画音声抽出**: FFmpeg.wasmで動画からWAV音声を抽出
- **UTAU音源ダウンロード**: 検出した音素をUTAU音源パッケージ（ZIP）としてダウンロード
- **シーケンス再生**: 検出された音素を順に再生プレビュー
- **候補選択UI**: 音素の候補を手動調整

## 技術スタック

- Next.js 16、React 19、TypeScript、Tailwind CSS 4（カスタムCSS）
- @xenova/transformers（AI音声解析）
- @ffmpeg/ffmpeg + @ffmpeg/util（動画音声抽出）
- kuroshiro + kuroshiro-analyzer-kuromoji（日本語形態素解析）
- JSZip（UTAU音源パッケージ生成）
- すべてブラウザ内処理（プライバシー保護）

## 開発の裏話

transformers.jsのモデル初期化に時間がかかるため、Web Workerでモデル読み込みをバックグラウンド実行しUIフリーズを防止しました。FFmpeg.wasmのWASM読み込みも非同期で行い、初回ロードの体感速度を改善しています。